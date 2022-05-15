import { atom } from "recoil";
import { Languages } from "../utils/constant";

export const languageAtom = atom<Languages>({
  default: "Japan",
  key: "languages",
});
