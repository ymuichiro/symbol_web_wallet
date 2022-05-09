import React, { useState } from "react";
import CardContent from "@mui/material/CardContent/CardContent";
import Grid from "@mui/material/Grid/Grid";
import { Card } from "../components/atom/Card";
import Typography from "@mui/material/Typography/Typography";
import Container from "@mui/material/Container/Container";
import TextField from "@mui/material/TextField/TextField";
import { Header } from "../components/atom/Header";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";

const SAMPLE_ADDRESSES = [
  "xxxx-xxxx-xxxx-xxxx-xxx1",
  "xxxx-xxxx-xxxx-xxxx-xxx2",
  "xxxx-xxxx-xxxx-xxxx-xxx3",
  "xxxx-xxxx-xxxx-xxxx-xxx4",
];

/**
 * 受取用QRコードを生成して表示する
 */
export function RecievePage(): JSX.Element {

  const [currentAddress, setCurrentAddress] = useState<string>(SAMPLE_ADDRESSES[0]);
  const [amount, setAmount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  return <>
    <Header />
    <div style={{ height: "1em" }} />
    <Container maxWidth="xl">
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={12} md={4}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card style={{ backgroundColor: "#FFF" }}>
              <CardContent>

              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="body2" fontWeight={"bold"}>受取</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2">受取アドレス</Typography>
              <Select
                required
                value={currentAddress}
                onChange={e => { setCurrentAddress(e.target.value); }}
                fullWidth
              >
                {SAMPLE_ADDRESSES.map((address, index) => <MenuItem value={address} key={index.toString()} >{address}</MenuItem>)}
              </Select>
              <TextField required type={"number"} onChange={(e) => {
                setAmount(Math.abs(Number(e.currentTarget.value)));
              }} label="数量" fullWidth style={{ marginTop: "20px" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </>;

}