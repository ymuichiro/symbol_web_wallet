export const MAIN_NET_CURRENCY_MOSAICID = "6BED913FA20223F8";
export const TEST_NET_CURRENCY_MOSAICID = "3A8416DB2D53B6C8";
export const MAIN_NET_CURRENCY_NAME = "symbol.xym";
export const TEST_NET_CURRENCY_NAME = "symbol.xym";

export const navigationPaths = {
  topPage: "*",
  networkPage: "/network",
  harvestPage: "/harvest",
  // notFound: "*",
  recievePage: "/recieve",
  decentralizeAuthPage: "/decentralize_auth",
  credentialsPage: "/credentials",
  sendPage: "/send",
  transactionsPage: "/transactions",
  settingsPage: "/settings",

};

export const languages = ["Japan"] as const;
export type Languages = typeof languages[number];