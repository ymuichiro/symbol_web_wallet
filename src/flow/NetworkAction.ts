import { NetworkStorage } from "../storage/NetworkStorage";
import { NodeScripts } from "symbol_sdk_min/dist/Node";
import { NetworkType } from "symbol_sdk_min/dist/model/Network";
import { NetworkStore } from "../type/NetworkModels";
import { NodeInfo } from "symbol_sdk_min/dist/model/Node";
import { ConnectionError } from "../utils/error";

export class NetworkAction {

  /** Configure network connection information */
  static async initNetworkConfigure(): Promise<NetworkStore> {
    const local = await new NetworkStorage("readonly").getNodeList();
    let store: NetworkStore = {} as any;
    if (local?.main === undefined) {
      const [primary, ...alternate] = await NodeScripts.getDefaultNodeList(NetworkType.MAIN_NET);
      store.main = { primary, alternate };
    }
    if (local?.test === undefined) {
      const [primary, ...alternate] = await NodeScripts.getDefaultNodeList(NetworkType.TEST_NET);
      store.test = { primary, alternate };
    }
    return this.updateNetworkConfigure(store);
  }

  /** Update network connection information */
  static async updateNetworkConfigure(networkStore: NetworkStore): Promise<NetworkStore> {
    const db = new NetworkStorage("readwrite");
    await db.updateNodeList(networkStore);
    return networkStore;
  }

  /** main,primaryのNetworkStoreより最初の生きているノードを返す */
  static async getLiveNode(store: NetworkStore["main"] | NetworkStore["test"]): Promise<NodeInfo> {
    if (await NodeScripts.isLive(store.primary.nodeUrl)) return store.primary;
    for (let node of store.alternate) {
      if (await NodeScripts.isLive(node.nodeUrl)) return node;
    }
    throw new ConnectionError("Could not connect to all target nodes");
  }

}