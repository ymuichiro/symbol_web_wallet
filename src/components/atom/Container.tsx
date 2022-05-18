import { FC, ReactNode } from "react";
import MuiContainer from "@mui/material/Container/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { Toolbar } from "./Toolbar";

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = props => {
  const isDesktop = useMediaQuery(useTheme().breakpoints.up("lg"));


  return <MuiContainer maxWidth="xl">
    <Toolbar />
    <div style={{ height: "1em" }} />
    {props.children}
    {!isDesktop && <div style={{ height: "3em" }} />}
  </MuiContainer>;
};