import { NetworkStorage } from "../storage/NetworkStorage";
import { NodeScripts } from "symbol_sdk_min/dist/Node";
import { NetworkScripts } from "symbol_sdk_min/dist/Network";
import { NetworkType } from "symbol_sdk_min/dist/model/Network";
import { NetworkStore } from "../type/NetworkModels";
import { NodeInfo } from "symbol_sdk_min/dist/model/Node";
import { ConnectionError } from "../utils/error";

export class NetworkAction {

  private static async getNetworkInfo(type: NetworkType): Promise<NetworkStore["main"]> {
    const [primary, ...alternate] = await NodeScripts.getDefaultNodeList(NetworkType.MAIN_NET);
    const property = await NetworkScripts.getNetworkProperties(primary.nodeUrl);
    const primaryInfo = { ...primary, networkProperty: property };
    const alternateInfo = [];
    for (const alt of alternate) {
      alternateInfo.push({ ...alt, networkProperty: property });
    }
    return { primary: primaryInfo, alternate: alternateInfo };
  }

  /** Configure network connection information */
  static async initNetworkConfigure(): Promise<NetworkStore> {
    const local = await new NetworkStorage("readonly").getNodeList();
    let store: NetworkStore = {} as any;
    if (local?.main === undefined) {
      store.main = await this.getNetworkInfo(NetworkType.MAIN_NET);
    };
    if (local?.test === undefined) {
      store.test = await this.getNetworkInfo(NetworkType.TEST_NET);
    }
    return this.updateNetworkConfigure(store);
  }

  /** Update network connection information */
  static async updateNetworkConfigure(networkStore: NetworkStore): Promise<NetworkStore> {
    const db = new NetworkStorage("readwrite");
    await db.updateNodeList(networkStore);
    return networkStore;
  };

  /** main,primaryのNetworkStoreより最初の生きているノードを返す */
  static async getLiveNode(store: NetworkStore["main"] | NetworkStore["test"]): Promise<NodeInfo> {
    if (await NodeScripts.isLive(store.primary.nodeUrl)) return store.primary;
    for (let node of store.alternate) {
      if (await NodeScripts.isLive(node.nodeUrl)) return node;
    };
    throw new ConnectionError("Could not connect to all target nodes");
  }

}