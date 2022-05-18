import LoopIcon from "@mui/icons-material/Loop";
import Button from "@mui/material/Button/Button";
import CardContent from "@mui/material/CardContent/CardContent";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";
import { Card } from "../components/atom/Card";
import { Container } from "../components/atom/Container";
import { Header } from "../components/atom/Header";
import { Select } from "../components/atom/Select";
import { StackModal } from "../components/atom/StackModal";
import { WalletChangePanel } from "../components/modal/ToggleWallet";
import { navigationPaths } from "../utils/constant";
import MuiContainer from "@mui/material/Container/Container";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton/IconButton";


export function DecentralizeAuthPage(): JSX.Element {
  const [isOpenSnack, setOpenSnack] = useState<boolean>(false);
  const [isConnectServerChecked, setConnectServerChecked] = useState<boolean>(false);
  const [isAuthServerChecked, setAuthServerChecked] = useState<boolean>(false);
  const navigation = useNavigate();

  const onChenageWalletStart = () => {
    setOpenSnack(true);
  };

  return <>
    <Header />
    <Container maxWidth="sm">
      <Card style={{ marginTop: "5em" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5" fontWeight="bold">
                認証リクスト
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary">
                認証を開始しますか？<br />
                身に覚えがない場合キャンセルして下さい<br />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">使用するアドレス</Typography>
                  <Typography variant="body1" >xxx-xxxx-xxxx-xxxx-xxxx-xxxx</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button color="secondary" onClick={onChenageWalletStart} >
                    <LoopIcon fontSize="medium" />
                    <Typography variant="caption" color="textSecondary" style={{ marginLeft: "5px" }}>
                      変更
                    </Typography>
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", alignItems: "stretch" }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="subtitle1" fontWeight="bold">接続中のURLは正しいですか？</Typography>
                  <Typography variant="body1">接続中 https://hoge.jp</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Checkbox onChange={e => setConnectServerChecked(e.currentTarget.checked)} checked={isConnectServerChecked} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", alignItems: "stretch" }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="subtitle1" fontWeight="bold">認証先のURLは正しいですか？</Typography>
                  <Typography variant="body1">認証先 https://hoge.jp</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Checkbox onChange={e => setAuthServerChecked(e.currentTarget.checked)} checked={isAuthServerChecked} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="secondary" style={{ fontWeight: "bold" }} onClick={() => navigation(navigationPaths.topPage)} >
                キャンセル
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="primary" style={{ fontWeight: "bold" }} disabled={!isAuthServerChecked || !isConnectServerChecked} onClick={onChenageWalletStart}>
                認証を開始
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
    <WalletChangeModal isOpen={isOpenSnack} setOpen={setOpenSnack} />
  </>;
}

type WalletChangeModalProps = {
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function WalletChangeModal(props: WalletChangeModalProps): JSX.Element {

  const [networkType, setNetworkType] = useState<NetworkType>(NetworkType.TEST_NET);

  const onCloseHandle = () => {
    props.setOpen(false);
  };

  return <>
    <StackModal open={props.isOpen} onClose={onCloseHandle}>
      <MuiContainer maxWidth="md">
        <CardContent style={{ marginTop: "1.5em" }}>
          <div style={{ display: "flex" }}>
            <Typography fontWeight="bold" style={{ flexGrow: 1 }}>ウォレット切替</Typography>
            <IconButton style={{ paddingTop: 0, paddingRight: 0 }} onClick={onCloseHandle}>
              <CloseIcon />
            </IconButton>
          </div>
        </CardContent>
        <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Select
            variant="standard"
            state={networkType}
            setState={setNetworkType}
            label={"ネットワークタイプ"}
            options={[
              { label: "メインネット", value: NetworkType.MAIN_NET },
              { label: "テストネット", value: NetworkType.TEST_NET },
            ]}
          />
          <WalletChangePanel networkType={NetworkType.TEST_NET} />
        </CardContent>
      </MuiContainer>
    </StackModal>
  </>;
}
