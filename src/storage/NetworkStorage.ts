import { IndexedDBWrapper, DatabaseTableBase } from "indexeddb_wrapper_far";
import { NetworkStore } from "../type/NetworkModels";

export class NetworkStorage extends IndexedDBWrapper<NetworkStore | undefined> {
  static readonly keyPath: string = "database/network";

  constructor(mode: IDBTransactionMode) {
    super("network", mode);
  }

  public start(): void {
    this.initialize(NetworkStorage.getInitValue());
  }

  static getInitValue(): DatabaseTableBase<undefined> {
    return {
      keyPath: NetworkStorage.keyPath,
      data: undefined,
    };
  }

  public async getNodeList(): Promise<NetworkStore | undefined> {
    const db = await this.get(NetworkStorage.keyPath);
    return db.data === undefined ? undefined : db.data;
  }

  public async updateNodeList(networkStore: NetworkStore): Promise<void> {
    await this.put({ keyPath: NetworkStorage.keyPath, data: networkStore });
  }

  public async clearNodeList(): Promise<void> {
    await this.put({ keyPath: NetworkStorage.keyPath, data: undefined });
  }

}