/*

 ** 注意 **

 開発段階では一旦indexeddbにて進めるが、
 ある程度できた段階で、CredentialsAPIへ移行する

*/

import { IndexedDBWrapper, DatabaseTableBase } from "indexeddb_wrapper_far";
import { InternalError } from "../utils/error";
import { PrivateKeyInfo } from "../type/AccountModels";

export class CredentialStorage extends IndexedDBWrapper<PrivateKeyInfo[]> {
  static readonly keyPath: string = "database/credential";

  constructor(mode: IDBTransactionMode) {
    super("credential", mode);
  }

  public start(): void {
    this.initialize(CredentialStorage.getInitValue());
  }

  static getInitValue(): DatabaseTableBase<PrivateKeyInfo[]> {
    return {
      keyPath: CredentialStorage.keyPath,
      data: [],
    };
  }

  public async getPrivateKey(id: string): Promise<string | undefined> {
    const store = await this.get(CredentialStorage.keyPath);
    const find = store.data.find(e => e.id === id);
    return find === undefined ? undefined : find.key;
  }

  public async addPrivateKey(privateKeyInfo: PrivateKeyInfo): Promise<void> {
    const store = await this.get(CredentialStorage.keyPath);
    const find = store.data.find(e => e.key === privateKeyInfo.key);
    if (find === undefined) {
      await this.put({ keyPath: store.keyPath, data: [...store.data, privateKeyInfo] });
    } else {
      throw new InternalError("The specified private key already exists");
    }
  }

  public async clearPrivateKey(): Promise<void> {
    await this.put({ keyPath: CredentialStorage.keyPath, data: [] });
  }

}