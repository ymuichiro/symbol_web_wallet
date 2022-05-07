import { NodeInfo } from "symbol_sdk_min/dist/model/Node";
import { Order } from "symbol_sdk_min/dist/open_api/Order";
import { TransactionScripts } from "symbol_sdk_min/dist/Transaction";
import { SymbolExplorerScripts } from "symbol_sdk_min/dist/SymbolExplorer";
import { TransactionInfo } from "../type/TransactionModels";
import { TransactionMetaDTO } from "symbol_sdk_min/dist/open_api/TransactionMetaDTO";
import { AddressScripts } from "symbol_sdk_min/dist/Address";
import { TransferTransactionDTO } from "symbol_sdk_min/dist/open_api/TransferTransactionDTO";
import { UnresolvedMosaic } from "symbol_sdk_min/dist/open_api/UnresolvedMosaic";
import { NamespaceScripts } from "symbol_sdk_min/dist/Namespace";
import { MosaicScripts } from "symbol_sdk_min/dist/Mosaic";
import { AccountBalance } from "../type/AccountModels";

export class TransactionActions {

  /** 対象アドレスの取引履歴を取得する。ExplorerのURLもマージ */
  static async getHistory(address: string, { nodeUrl, networkIdentifier }: NodeInfo) {
    const tx = await TransactionScripts.searchTransactions(nodeUrl, "confirmed", { address: address, order: Order.Desc });
    const txs: TransactionInfo[] = [];
    for (const t of tx.data) {
      // ExplorerURL判定
      const hash: string | undefined = (t.meta as TransactionMetaDTO).hash;
      const url = hash === undefined ? undefined : SymbolExplorerScripts.getUrlForTransaction(hash, networkIdentifier);
      // アドレス判定(共通して存在するsignerPublicKeyより判定)
      const from = AddressScripts.createFromPublicKey(t.transaction.signerPublicKey, networkIdentifier).plain();
      // Mosaic判定
      const txInMosaics: UnresolvedMosaic[] | undefined = (t.transaction as TransferTransactionDTO).mosaics;
      const balance: AccountBalance[] = [];
      if (txInMosaics !== undefined) {
        for (const mosaic of txInMosaics) {
          const { mosaicNames } = await NamespaceScripts.getMosaicNames(nodeUrl, [mosaic.id]);
          const { mosaic: mosaicInfo } = await MosaicScripts.getMosaicInfo(nodeUrl, mosaic.id);
          const mname = mosaicNames.length !== 0 && mosaicNames[0].names.length !== 0 ? mosaicNames[0].names[0] : undefined;
          const amount = MosaicScripts.getRelativeAmount(Number(mosaic.amount), mosaicInfo.divisibility);
          balance.push({ name: mname, id: mosaic.id, amount: amount.compact() });
        }
      }

      txs.push({ ...t, explorer: { url }, info: { fromAddress: from, mosaic: balance } });
    }

    return { transactions: txs, page: tx.pagination };
  }
}