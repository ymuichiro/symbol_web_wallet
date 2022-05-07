import { Account, AccountScripts } from "symbol_sdk_min/dist/Account";
import { NetworkType } from "symbol_sdk_min/dist/model/Network";
import { getUuid } from "symbol_sdk_min/dist/util/helpers";
import { AccountBalance, AccountInfo, AddressGenerateItem } from "../type/AccountModels";
import { MnemonicScripts } from "symbol_sdk_min/dist/Mnemonic";
import { InputError } from "../utils/error";
import { AccountStorage } from "../storage/AccountStorage";
import { CredentialStorage } from "../storage/CredentialStorage";
import { defaultUserIcon } from "../assets/defaultUserIcon";
import { NodeInfo } from "symbol_sdk_min/dist/model/Node";
import { NamespaceScripts } from "symbol_sdk_min/dist/Namespace";
import { MosaicScripts } from "symbol_sdk_min/dist/Mosaic";
import { MAIN_NET_CURRENCY_MOSAICID, MAIN_NET_CURRENCY_NAME, TEST_NET_CURRENCY_MOSAICID, TEST_NET_CURRENCY_NAME } from "../utils/constant";

/** Abstract account operations */
export class AccountActions {

  /** 該当ニーモニックで発行可能なアドレスの一覧を最大20件返す。IndexedDBで同じアドレスが存在した場合はリストより削除する */
  static async getAddressByMnemonic(mnemonic: string, networkType: NetworkType): Promise<AddressGenerateItem[]> {
    if (!MnemonicScripts.isMnemonic(mnemonic)) throw new InputError("The mnemonic format entered is incorrect");
    const store = await new AccountStorage("readonly").getAllAccounts();
    let addresses: AddressGenerateItem[] = [];
    for (let i = 0; i < 20; i++) {
      const account = AccountScripts.createFromMnemonic(mnemonic, i + 1, networkType);
      const find = store.find(e => e.address === account.address.plain());
      addresses.push({ address: account.address.plain(), index: i + 1, isExists: find !== undefined });
    }
    return addresses;
  }

  /** import wallet by mnemonic */
  static async createWalletByMnemonic(mnemonic: string, index: number, name: string, networkType: NetworkType): Promise<AccountInfo> {
    if (!MnemonicScripts.isMnemonic(mnemonic)) throw new InputError("The mnemonic format entered is incorrect");
    const account = AccountScripts.createFromMnemonic(mnemonic, index, networkType);
    return await this.addAccountToAnyStorage(name, account, networkType);
  }

  /** import wallet by private key */
  static async createWalletByPrivateKey(privateKey: string, name: string, networkType: NetworkType): Promise<AccountInfo> {
    const account = AccountScripts.createFromPrivateKey(privateKey, networkType);
    return await this.addAccountToAnyStorage(name, account, networkType);
  }

  /** get balance for spacific address */
  static async getBalanceByAddress(address: string, { nodeUrl, networkIdentifier }: NodeInfo): Promise<AccountBalance[]> {
    // アカウント有効確認
    try {
      const accountInfo = await AccountScripts.getInfo(nodeUrl, address);

      // モザイクの情報を取得
      const balance: AccountBalance[] = [];
      for (const mosaic of accountInfo.account.mosaics) {
        const { mosaicNames } = await NamespaceScripts.getMosaicNames(nodeUrl, [mosaic.id]);
        const { mosaic: mosaicInfo } = await MosaicScripts.getMosaicInfo(nodeUrl, mosaic.id);
        const mname = mosaicNames.length !== 0 && mosaicNames[0].names.length !== 0 ? mosaicNames[0].names[0] : undefined;
        const amount = MosaicScripts.getRelativeAmount(Number(mosaic.amount), mosaicInfo.divisibility);
        balance.push({ id: mosaic.id, name: mname, amount: amount.compact() });
      }

      return balance;

    } catch (_) {
      if (networkIdentifier === NetworkType.MAIN_NET) {
        return [{ id: MAIN_NET_CURRENCY_MOSAICID, name: MAIN_NET_CURRENCY_NAME, amount: 0 }];
      } else {
        return [{ id: TEST_NET_CURRENCY_MOSAICID, name: TEST_NET_CURRENCY_NAME, amount: 0 }];
      }
    }
  }

  private static async addAccountToAnyStorage(name: string, account: Account, networkType: NetworkType): Promise<AccountInfo> {
    const uuid = getUuid();
    const accountInfo = {
      id: uuid,
      name: name,
      avator: defaultUserIcon,
      networkType: networkType,
      address: account.address.plain(),
      publicKey: account.publicKey,
    };
    await new CredentialStorage("readwrite").addPrivateKey({ id: uuid, key: account.privateKey });
    await new AccountStorage("readwrite").addAccount(accountInfo);
    return accountInfo;
  }
}
