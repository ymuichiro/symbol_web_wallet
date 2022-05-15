import Modal from "@mui/material/Modal/Modal";
import Grow from "@mui/material/Grow";
import { useEffect, useState } from "react";
import { SITE_LOGO_DARK } from "../../assets/logo";

type P = {
  open: boolean,
};

export function ShutterAnimation(props: P): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (props.open) {
      setTimeout(() => { setIsOpen(true); }, 100);
      setTimeout(() => { setIsOpen(false); }, 1500);
    }
  }, []);

  return <>
    <Modal open={props.open}>
      <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212121",
      }}>
        <Grow
          in={isOpen}
          timeout={500}
        >
          <img
            src={SITE_LOGO_DARK}
            width={"300px"}
            alt="logo"
          />
        </Grow>
      </div>
    </Modal>
  </>;

}