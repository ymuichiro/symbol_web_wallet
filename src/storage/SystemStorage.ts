import { IndexedDBWrapper, DatabaseTableBase } from "indexeddb_wrapper_far";
import { SystemInfo } from "../type/SystemModels";


export class SystemStorage extends IndexedDBWrapper<SystemInfo> {
  static readonly keyPath: string = "database/system";

  constructor(mode: IDBTransactionMode) {
    super("system", mode);
  }

  public start(): void {
    this.initialize(SystemStorage.getInitValue());
  }

  static getInitValue(): DatabaseTableBase<SystemInfo> {
    return {
      keyPath: SystemStorage.keyPath,
      data: {
        lang: "ja",
        selectedWalletId: undefined,
      },
    };
  }
}