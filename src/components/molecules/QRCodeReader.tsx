import { BrowserQRCodeReader } from "@zxing/browser";
import React, { FC, useEffect, useRef, useState } from "react";
import Result from "@zxing/library/esm/core/Result";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Button from "@mui/material/Button/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography/Typography";

type QrCodeReaderProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onRead: (result: Result) => void;
};

type CameraDeviceInfo = {
  id: string;
  name: string;
};

export const QrCodeReader: FC<QrCodeReaderProps> = ({ onRead, setOpen }) => {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mountedRef = useRef<boolean>(false);
  const [devices, setDevices] = useState<CameraDeviceInfo[]>([]);
  const [currentCamera, setCurrentCamera] = useState<string | undefined>(undefined);

  const setDevicesList = async (): Promise<CameraDeviceInfo[]> => {
    const list = await BrowserQRCodeReader.listVideoInputDevices();
    const result: CameraDeviceInfo[] = [];
    for (const device of list) {
      result.push({ id: device.deviceId, name: device.label });
    }
    setDevices([...result]);
    return result;
  };

  useEffect(() => {
    mountedRef.current = true;
    const codeReader = new BrowserQRCodeReader(undefined, undefined);
    setDevicesList();
    codeReader.decodeFromVideoDevice(currentCamera, videoRef.current!, function (result, _, controls) {
      if (mountedRef.current === false) {
        controls.stop();
        return;
      }
      if (typeof result !== "undefined") {
        controls.stop();
        onRead(result);
      }
    });
    return function cleanup() {
      mountedRef.current = false;
    };
  }, [currentCamera, onRead]);


  return <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: theme.zIndex.modal,
  }}>
    <Typography variant="h6" style={{ marginBottom: "1em", width: "90%", maxWidth: "1000px" }} fontWeight="bold" align="center">
      QRコードを読み込んでください
    </Typography>
    {
      devices.length !== 0 &&
      <Select
        value={currentCamera === undefined ? devices[0]?.id : currentCamera}
        onChange={e => { setCurrentCamera(e.target.value); }}
        style={{ width: "90%", maxWidth: "1000px" }}
      >
        {devices.map((device, index) => <MenuItem value={device.id} key={index.toString()} >{device.name}</MenuItem>)}
      </Select>
    }

    <video style={{ width: "90%", maxWidth: "1000px", borderRadius: "10px", marginTop: "1em", marginBottom: "1em" }} ref={videoRef} />
    <Button variant="outlined" color="primary" style={{ width: "90%", maxWidth: "1000px" }} onClick={() => setOpen(false)} size="large">
      STOP
    </Button>

  </div >;

};