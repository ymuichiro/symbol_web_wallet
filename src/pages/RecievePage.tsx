import { useState } from "react";
import CardContent from "@mui/material/CardContent/CardContent";
import Grid from "@mui/material/Grid/Grid";
import { Card } from "../components/atom/Card";
import Typography from "@mui/material/Typography/Typography";
import TextField from "@mui/material/TextField/TextField";
import { Header } from "../components/atom/Header";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Button from "@mui/material/Button/Button";
import { useTheme } from "@mui/material/styles";
import { CenteringBox } from "../components/atom/CenteringBox";
import { Container } from "../components/atom/Container";

const SAMPLE_ADDRESSES = [
  "xxxx-xxxx-xxxx-xxxx-xxx1",
  "xxxx-xxxx-xxxx-xxxx-xxx2",
  "xxxx-xxxx-xxxx-xxxx-xxx3",
  "xxxx-xxxx-xxxx-xxxx-xxx4",
];

const BASE64QR_SAMPLE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRAQMAAAD5FshgAAAABlBMVEX///8AAABVwtN+AAAAz0lEQVRIie2UMQ6EIBBFv7Gw5AjcRC5GIokXW2/CESgpiOOAxe4mlnxj4S8GeBQTZj4DvHqYjIjsRmJ2uskkFoDZFA16YLFV8oxR9EKTE5kJNt/ArvJ2Y3f0o/lgvfBGP3ZqiX/H7kxLB28xSLGZxvIgAdklsJj6AE7O+kUWK1aj17zft/VnmOp8wZA8i50XwcrHFBZrfsZS50uwILFQv6T6ea6uI7E2J2GnvTaKyKoZfvvGYLrKlsbIYq1++vdd8gCJNR+MMm1JzcBhrx6kA3AQf5hWbwCGAAAAAElFTkSuQmCC";

/**
 * 受取用QRコードを生成して表示する
 */
export function RecievePage(): JSX.Element {

  const theme = useTheme();
  const [currentAddress, setCurrentAddress] = useState<string>(SAMPLE_ADDRESSES[0]);
  const [amount, setAmount] = useState<string>("");

  return <>
    <Header />
    <Container>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={12} md={4}>
          <CenteringBox>
            <Card style={{ backgroundColor: "#FFF", width: "100%", maxWidth: "300px" }}>
              <CardContent style={{ flexGrow: 1, padding: new Array(4).fill(theme.spacing(2)).join(" ") }}>
                <img
                  height="100%"
                  width="100%"
                  src={BASE64QR_SAMPLE}
                  alt="qr_code"
                />
              </CardContent>
            </Card>
          </CenteringBox>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="body2" fontWeight={"bold"}>受取</Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="body2">受取アドレス</Typography>
              <Select
                required
                value={currentAddress}
                onChange={e => { setCurrentAddress(e.target.value); }}
                fullWidth
              >
                {SAMPLE_ADDRESSES.map((address, index) => <MenuItem value={address} key={index.toString()} >{address}</MenuItem>)}
              </Select>
              <TextField required value={amount} onChange={(e) => {
                const r = Math.abs(Number(e.target.value)).toString();
                setAmount(r === "NaN" ? "" : r);
              }} label="数量" fullWidth style={{ marginTop: "20px" }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              />
            </CardContent>
            <CardContent >
              <Button variant="contained" color="primary" fullWidth >
                QRコード更新
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </>;

}