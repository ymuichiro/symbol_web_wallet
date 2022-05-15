import Card from "@mui/material/Card/Card";
import Modal from "@mui/material/Modal/Modal";
import Slide from "@mui/material/Slide/Slide";
import { FC, ReactNode } from "react";

type Props = {
  isOpen: boolean,
  onClose: () => void,
  children?: ReactNode,
};

export const StackModal: FC<Props> = props => {

  return <Modal open={props.isOpen} onClose={props.onClose} >
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Card style={{
        position: "absolute",
        bottom: "0px",
        width: "100%",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        height: "85vh",
        overflowY: "scroll",
      }}>
        {props.children}
      </Card>
    </Slide>
  </Modal>;
};