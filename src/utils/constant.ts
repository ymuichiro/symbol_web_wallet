export const MAIN_NET_CURRENCY_MOSAICID = "6BED913FA20223F8";
export const TEST_NET_CURRENCY_MOSAICID = "3A8416DB2D53B6C8";
export const MAIN_NET_CURRENCY_NAME = "symbol.xym";
export const TEST_NET_CURRENCY_NAME = "symbol.xym";

export const navigationPaths = {
  topPage: "/symbol_web_wallet/",
  networkPage: "/symbol_web_wallet/network",
  harvestPage: "/symbol_web_wallet/harvest",
  notFound: "*",
  recievePage: "/symbol_web_wallet/recieve",
  decentralizeAuthPage: "/symbol_web_wallet/decentralize_auth",
  credentialsPage: "/symbol_web_wallet/credentials",
  sendPage: "/symbol_web_wallet/send",
  transactionsPage: "/symbol_web_wallet/transactions",
  settingsPage: "/symbol_web_wallet/settings",

};

export const languages = ["Japan"] as const;
export type Languages = typeof languages[number];