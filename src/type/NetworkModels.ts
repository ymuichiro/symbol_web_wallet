import { NodeInfo } from "symbol_sdk_min/dist/model/Node";
import { NetworkConfigurationDTO } from "symbol_sdk_min/dist/open_api/NetworkConfigurationDTO";

export interface NetworkInfo extends NodeInfo {
  networkProperty: NetworkConfigurationDTO,
}

/** Network information maintained during operation */
export interface NetworkStore {
  main: {
    primary: NetworkInfo;
    alternate: NetworkInfo[];
  },
  test: {
    primary: NetworkInfo;
    alternate: NetworkInfo[];
  };
}
