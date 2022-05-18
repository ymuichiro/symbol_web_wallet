import { createTheme } from "@mui/material/styles";

export type DisplayColorMode = "light" | "dark";

type Props = {
  mode: DisplayColorMode;
};

export const customTheme = (props: Props) => createTheme({
  palette: {
    mode: props.mode,
    primary: {
      dark: "#6956b2",
      main: "#977BFF",
      light: "#ab95ff",
    },
    secondary: {
      dark: "#1b89aa",
      main: "#2196f3",
      light: "#4badf5",
    },
    success: {
      main: "#2e7d32",
      dark: "#1b5e20",
      light: "#4caf50",
      contrastText: "#fff",
    }
  }
});