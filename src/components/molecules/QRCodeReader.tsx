import Modal from "@mui/material/Modal/Modal";
import Typography from "@mui/material/Typography/Typography";
import QrReader from "react-qr-reader";

type Props = {
  isRunQrReader: boolean;
  setIsRunQrReader: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<any>>;
};

export function QrCodeReader(props: Props) {

  const handleClose = () => {
    props.setIsRunQrReader(false);
  };

  const onReadQr = (result: string | null) => {
    if (result !== null && result !== undefined) {
      props.setResult(JSON.parse(result));
      handleClose();
    } else {
      handleClose();
    }
  };

  return <Modal open={props.isRunQrReader} onClose={handleClose}>
    <div onClick={handleClose} style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <Typography variant="h5" align="center" color="white">
          Symbolのアドレス用QRコードを読み取ってください
        </Typography>
        <QrReader onScan={onReadQr} onError={console.error} />
      </div>
    </div>
  </Modal>;
};