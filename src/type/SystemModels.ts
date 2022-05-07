export type Language = "ja";

/** storage table type for application configure */
export interface SystemInfo {
  /** current lancuage */
  lang: Language;
  /** current wallet */
  selectedWalletId?: string;
}