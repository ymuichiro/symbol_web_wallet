import { useState } from "react";
import { Card } from "../components/atom/Card";
import { Header } from "../components/atom/Header";
import { useTheme } from "@mui/material/styles";
import { CurrencyBalanceCard } from "../components/molecules/CurrencyBalanceCard";
import { MosaicsCard } from "../components/molecules/MosaicsCard";
import { QrCodeReader } from "../components/molecules/QRCodeReader";
import CardContent from "@mui/material/CardContent/CardContent";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import Typography from "@mui/material/Typography/Typography";
import CheckBox from "@mui/material/Checkbox/Checkbox";
import Button from "@mui/material/Button/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { NumericField } from "../components/atom/NumericField";
import { SelectItem, Select } from "../components/atom/Select";
import { Container } from "../components/atom/Container";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import QrIcon from "@mui/icons-material/QrCode2TwoTone";
import Contacts from "@mui/icons-material/Contacts";
import IconButton from "@mui/material/IconButton/IconButton";

const SAMPLE_ADDRESSES: SelectItem<string>[] = [
  { label: "xxxx-xxxx-xxxx-xxxx-xxx1 Symbol/XYM 50", value: "xxxx-xxxx-xxxx-xxxx-xxx1" },
  { label: "xxxx-xxxx-xxxx-xxxx-xxx2 Symbol/XYM 50", value: "xxxx-xxxx-xxxx-xxxx-xxx2" },
  { label: "xxxx-xxxx-xxxx-xxxx-xxx3 Symbol/XYM 50", value: "xxxx-xxxx-xxxx-xxxx-xxx3" },
  { label: "xxxx-xxxx-xxxx-xxxx-xxx4 Symbol/XYM 50", value: "xxxx-xxxx-xxxx-xxxx-xxx4" },
];

const SAMPLE_FEES: SelectItem<string>[] = [
  { label: "高速 - 0.1xym", value: "fast" },
  { label: "平均 - 0.1xym", value: "average" },
  { label: "低速  - 0.1xym", value: "slow" },
];

type MosaicSelect = {
  id: string,
  label: string,
};

/**
 * アドレスを指定してトークンを送信する
 */
export function SendPage(): JSX.Element {

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up("lg"));
  const [isOpenQRCamera, setOpenQRCamera] = useState<boolean>(false);
  // form
  const [fromAddress, setFromAddress] = useState<string>(SAMPLE_ADDRESSES[0].value);
  const [recipient, setRecipient] = useState<string>("");
  const [mosaic, setMosaic] = useState<MosaicSelect | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [fee, setFee] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isEncrypt, setEncrypt] = useState<boolean>(false);

  return <>
    <Header />
    <div style={{ height: "1em" }} />
    <Container>
      <Grid container direction="row" spacing={2} style={{ height: match ? "90vh" : "auto", visibility: isOpenQRCamera ? "hidden" : "visible" }}>
        <Grid item xs={12} sm={12} md={12} lg={4} style={{ height: "100%" }}>
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: match ? theme.spacing(2) : "auto" }}>
              <CurrencyBalanceCard />
            </div>
            {match && <MosaicsCard />}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} style={{ height: "100%" }}>
          <Card style={{ height: "100%" }}>
            <CardContent>
              <Typography>
                送信内容を入力して下さい
              </Typography>
            </CardContent>
            <CardContent>
              <Select
                fullWidth
                setState={setFromAddress}
                state={fromAddress}
                options={SAMPLE_ADDRESSES}
                label="送信元アドレス"
                style={{ marginBottom: "1.5em" }}
              />
              <TextField
                fullWidth
                label="送信先アドレス"
                placeholder="手入力、もしくはQRコードより選択"
                value={recipient}
                onChange={e => setRecipient(e.currentTarget.value)}
                style={{ marginBottom: "1.5em" }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton ><Contacts /></IconButton>
                    <IconButton onClick={() => setOpenQRCamera(true)}><QrIcon /></IconButton>
                  </InputAdornment>
                }} />
              <Autocomplete
                disablePortal
                fullWidth
                value={mosaic}
                options={[{ label: "symbol/xym", id: "xxxxxxxx" }]}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={(_: any, newValue: MosaicSelect | null) => { setMosaic(newValue); }}
                renderInput={(params) => <TextField {...params} label="モザイク" placeholder="送信するモザイクを選択" />}
                style={{ marginBottom: "1.5em" }}
              />
              <NumericField
                state={amount}
                setState={setAmount}
                fullWidth
                label="数量"
                placeholder="モザイクの送付数を指定"
                style={{ marginBottom: "1.5em" }}
              />
              <Select
                fullWidth
                setState={setFee}
                state={fee}
                options={SAMPLE_FEES}
                label="手数料"
                style={{ marginBottom: "1.5em" }}
              />
              <TextField
                fullWidth
                label="メッセージ"
                multiline
                value={message}
                onChange={e => setMessage(e.currentTarget.value)}
                rows={4} style={{ marginBottom: "1.5em" }} />
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: "1.5em" }}>
                <CheckBox value={isEncrypt} onChange={e => setEncrypt(e.target.checked)} />
                <Typography component={"label"}>暗号化</Typography>
              </div>
              <Button fullWidth variant="contained" color="primary">確定</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {isOpenQRCamera && <QrCodeReader setOpen={setOpenQRCamera} onRead={e => {
        setOpenQRCamera(false);
        console.log(e);
      }} />}
    </Container >
  </>;

}