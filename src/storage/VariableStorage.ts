import { AccountStorage } from "./AccountStorage";
import { NetworkStorage } from "./NetworkStorage";
import { SystemStorage } from "./SystemStorage";

/** Application store */
class Store {
  private token: string;

  constructor() {
    this.token = "";
    new AccountStorage("readwrite").start();
    new NetworkStorage("readwrite").start();
    new SystemStorage("readwrite").start();
  }

}

/** Store */
export const store: Store = new Store();