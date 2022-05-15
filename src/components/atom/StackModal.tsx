import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Modal from "@mui/material/Modal/Modal";
import { FC } from "react";

export const StackModal: FC<{}> = () => {

  return <Modal open={true}>
    <Card style={{
      position: "absolute",
      bottom: "0px",
      width: "100%",
      backgroundColor: "white",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
    }}>
      <CardContent>

      </CardContent>
    </Card>
  </Modal>;
};