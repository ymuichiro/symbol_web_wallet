import { atom } from "recoil";
import { DisplayColorMode } from "../utils/theme";

export const displayColorModeAtom = atom<DisplayColorMode>({
  default: "dark",
  key: "displayColorMode",
});