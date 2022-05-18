import { ReactNode } from "react";
import { SwipeableDrawer } from "@mui/material";

type Props = {
  children?: ReactNode;
  open: boolean;
  onClose: (event: React.SyntheticEvent<{}, Event>) => void;
};


export function StackModal(props: Props): JSX.Element {

  return <SwipeableDrawer
    anchor="bottom"
    disableSwipeToOpen
    onOpen={() => { }}
    open={props.open}
    onClose={props.onClose}
    PaperProps={{
      style: {
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        height: "85vh",
      }
    }}
  >
    {props.children}
  </SwipeableDrawer>;

}