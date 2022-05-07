import { NetworkType } from "symbol_sdk_min/dist/model/Network";

export interface AccountInfo {
  id: string;
  name: string;
  address: string;
  publicKey: string;
  networkType: NetworkType;
  avator: string;
}

export interface PrivateKeyInfo {
  id: string;
  key: string;
}

export interface AddressGenerateItem {
  address: string;
  index: number;
  isExists: boolean;
}

export interface AccountBalance {
  id: string;
  amount: number;
  name?: string;
}