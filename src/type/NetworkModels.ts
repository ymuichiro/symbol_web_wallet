import { NodeInfo } from "symbol_sdk_min/dist/model/Node";

/** Network information maintained during operation */
export interface NetworkStore {
  main: {
    primary: NodeInfo;
    alternate: NodeInfo[];
  },
  test: {
    primary: NodeInfo;
    alternate: NodeInfo[];
  };
}
