import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button/Button";
import CardContent from "@mui/material/CardContent/CardContent";
import Divider from "@mui/material/Divider/Divider";
import Grid from "@mui/material/Grid/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField/TextField";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Typography from "@mui/material/Typography/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SYMBOL_LOGO } from "../assets/logo";
import { Card } from "../components/atom/Card";
import { Container } from "../components/atom/Container";
import { CopyIconButton } from "../components/atom/CopyIconButton";
import { Header } from "../components/atom/Header";
import { Select } from "../components/atom/Select";
import { Snackbar } from "../components/atom/Snackbar";

const StatusItems = [
  { label: "承認済み", value: "confirmed" },
  { label: "未承認", value: "unconfirmed" },
  { label: "署名待ち", value: "unsinged" }
];

/**
 * 保持するCredential情報を一覧で表示する
 * 固定のCredentialはFT形式で、状態変化の伴うCredentialはNFT形式とする
 */
export function CredentialsPage(): JSX.Element {
  const navigation = useNavigate();
  const theme = useTheme();
  const [isOpenSnack, setOpenSnack] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [mosaicId, setMosaicId] = useState<string>("");

  const clickReset = () => {
    [setAddress, setStatus].forEach(setState => {
      setState("");
    });
  };


  return <>
    <Header />
    <Container>
      <Card style={{ height: "100%", maxHeight: "100%", width: "100%" }}>
        <Snackbar open={isOpenSnack} setOpen={setOpenSnack} duration={3000} message={"コピーしました"} />
        <CardContent>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Typography variant="body2" fontWeight="bold" style={{ flexGrow: "1" }}>Credentials</Typography>
            <Button size="small" variant="text" style={{ color: theme.palette.secondary.light }}>エクスプローラーを開く</Button>
          </div>
        </CardContent>
        <CardContent>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={address}
                onChange={e => setAddress(e.currentTarget.value)}
                label="Address"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={mosaicId}
                onChange={e => setMosaicId(e.currentTarget.value)}
                label="モザイクID"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                label="状態"
                size="small"
                state={status}
                setState={setStatus}
                options={StatusItems}
              />
            </Grid>
            <Grid item xs={6}>
              <Button color="secondary" variant="contained" fullWidth size="small" onClick={clickReset} style={{ fontWeight: "bold" }}>リセット</Button>
            </Grid>
            <Grid item xs={6}>
              <Button color="primary" variant="contained" fullWidth size="small" style={{ fontWeight: "bold" }}>検索</Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent style={{ height: "100%", paddingTop: "0px" }}>
          <div style={{ maxHeight: "100%", overflowY: "auto" }}>
            <List >
              {new Array(30).fill("").map((_, index) => ({ entity: `ほげほげ株式会社 ${index.toString()}`, opponent: "xxxx-xxxx-xxxx-xxxx", date: "2022/01/01 01:01:00", mosaicId: `x${index.toString()}xxxxxxxxxxxx`, icon: SYMBOL_LOGO, })).map((item, index) => <ListItem key={index.toString()} divider style={{ paddingLeft: "0px" }}>
                <Grid container direction="row" spacing={1} style={{ marginTop: "1em", marginBottom: "1em" }}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">発行者 {item.entity}</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="subtitle1">{item.mosaicId}</Typography>
                      <CopyIconButton
                        text={item.mosaicId}
                        onClick={() => setOpenSnack(true)}
                      />
                    </div>
                    <div style={{ marginTop: "0.5em" }}>
                      <Typography variant="body2" color="textSecondary">{item.date}</Typography>
                      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                        <Typography variant="body1">{item.opponent}</Typography>
                        <CopyIconButton
                          text={item.mosaicId}
                          onClick={() => setOpenSnack(true)}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={{ backgroundColor: theme.palette.grey["200"], display: "flex", justifyContent: "center", borderRadius: "10px" }}>
                        <img height="60px" width="60px" src={item.icon} style={{ margin: "1em" }} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Tooltip title="エクスプローラーを開く">
                      <IconButton>
                        <LanguageIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </ListItem>)}
            </List>
          </div>
        </CardContent>
      </Card>;
    </Container>
  </>;
}
