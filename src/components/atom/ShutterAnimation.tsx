import Modal from "@mui/material/Modal/Modal";
import Grow from "@mui/material/Grow";
import { useEffect, useState } from "react";

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
      <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grow in={isOpen} timeout={500}>
          <img
            src="https://github.com/ymuichiro/symbol_japan_forum/blob/main/logo/cc_0/Symbol_Logo_Wordmark_Light_BG.png?raw=true"
            width={"300px"}
            alt="logo"
          />
        </Grow>
      </div>
    </Modal>
  </>;

}