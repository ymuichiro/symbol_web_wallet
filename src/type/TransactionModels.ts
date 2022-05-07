import { TransactionInfoDTO } from "symbol_sdk_min/dist/open_api/TransactionInfoDTO";
import { AccountBalance } from "./AccountModels";

export interface TransactionInfo extends TransactionInfoDTO {
  explorer: {
    url?: string;
  };
  info: {
    fromAddress: string;
    mosaic: AccountBalance[],
  };
}