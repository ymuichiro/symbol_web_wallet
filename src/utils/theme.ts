import { createTheme } from "@mui/material/styles";

export type DisplayColorMode = "light" | "dark";

type Props = {
  mode: DisplayColorMode;
};

export const customTheme = (props: Props) => createTheme({
  palette: {
    mode: props.mode,
  }
});