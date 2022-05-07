import { IndexedDBWrapper, DatabaseTableBase } from "indexeddb_wrapper_far";
import { InternalError } from "../utils/error";
import { AccountInfo } from "../type/AccountModels";


export class AccountStorage extends IndexedDBWrapper<AccountInfo[]> {
  static readonly keyPath: string = "database/account";

  constructor(mode: IDBTransactionMode) {
    super("account", mode);
  }

  public start(): void {
    this.initialize(AccountStorage.getInitValue());
  }

  static getInitValue(): DatabaseTableBase<AccountInfo[]> {
    return {
      keyPath: AccountStorage.keyPath,
      data: [],
    };
  }

  public async addAccount(account: AccountInfo): Promise<void> {
    const accounts = await this.getAllAccounts();
    const find = accounts.find(e => e.address === account.address);
    if (find !== undefined) throw new InternalError("The specified account already exists");
    await this.put({ keyPath: AccountStorage.keyPath, data: [...accounts, account] });
  }

  public async getAccount(id: string): Promise<AccountInfo | undefined> {
    const store = await this.get(AccountStorage.keyPath);
    return store.data.find(e => e.id === id);
  }

  public async getAllAccounts(): Promise<AccountInfo[]> {
    return (await this.get(AccountStorage.keyPath)).data;
  }
}