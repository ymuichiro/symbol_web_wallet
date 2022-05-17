import { FC, ReactNode, SyntheticEvent, useState } from "react";
import { NetworkType } from "symbol_sdk_min/dist/model/Network";
import { defaultUserIcon } from "../../assets/defaultUserIcon";
import { Select } from "../atom/Select";
import { SYMBOL_LOGO } from "../../assets/logo";
import CardContent from "@mui/material/CardContent/CardContent";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import List from "@mui/material/List/List";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import Tab from "@mui/material/Tab/Tab";
import Tabs from "@mui/material/Tabs/Tabs";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import QrCodeIcon from "@mui/icons-material/QrCode2TwoTone";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import ListItem from "@mui/material/ListItem/ListItem";
import CheckIcon from "@mui/icons-material/Check";
import { CopyIconButton } from "../atom/CopyIconButton";
import { Snackbar } from "../atom/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import QrIcon from "@mui/icons-material/QrCode2TwoTone";
import { QrCodeReader } from "../molecules/QRCodeReader";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import Modal from "@mui/material/Modal/Modal";
import { StackModal } from "../atom/StackModal";

type Props = {
  onClose: () => void;
};

export function ToggleWallet(props: Props): JSX.Element {
  const [networkType, setNetworkType] = useState<NetworkType>(NetworkType.TEST_NET);
  const [tab, setTab] = useState(0);

  const handleTabChange = (_: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return <>
    <CardContent style={{ marginTop: "1.5em" }}>
      <Container maxWidth="lg" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <Typography variant="h5" fontWeight="bold" style={{ flexGrow: 1 }}>
            ウォレット切替
          </Typography>
          <IconButton onClick={props.onClose} style={{ padding: "0px 16px 0px 0px" }}>
            <CloseIcon />
          </IconButton>
        </div>
      </Container>
    </CardContent>
    <CardContent style={{ marginTop: "1.5em" }}>
      <Container maxWidth="lg" style={{ paddingLeft: 0, paddingRight: 0 }}>
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
      </Container>
    </CardContent>
    <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Container maxWidth="lg" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="切り替え" />
          <Tab label="新規作成" />
          <Tab label="削除（非表示）" />
        </Tabs>
        <TabPanel value={tab} index={0}>
          <WalletChangePanel networkType={networkType} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <WalletCreatePanel />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <WalletDeletePanel />
        </TabPanel>
      </Container>
    </CardContent>
  </>;
}

type TabPanelProps = {
  index: number,
  value: number,
  children: ReactNode,
};

export const TabPanel: FC<TabPanelProps> = ({ index, value, children }): JSX.Element => {
  return index === value ? <>{children}</> : <></>;
};


type WalletChangePanelProps = {
  networkType: NetworkType,
};

export function WalletChangePanel(_: WalletChangePanelProps): JSX.Element {

  const [isOpenSnack, setOpenSnack] = useState<boolean>(false);

  const MOCK = [
    {
      name: "メインウォレット",
      address: "xxxx-xxxx-xxxx-xxxx-xxxx",
      balance: 300000000,
      multisig: true,
      avatar: defaultUserIcon,
      isActive: true,
    },
    ...new Array(20).fill("").map((_, index) => ({
      name: "サブウォレット",
      address: "xxxx-xxxx-xxxx-xxxx-xxx" + index.toString(),
      balance: Math.random() * 1000 * index,
      multisig: false,
      avatar: defaultUserIcon,
      isActive: false,
    }))
  ];

  return <>
    <Snackbar
      duration={3000}
      message="コピーしました"
      open={isOpenSnack}
      setOpen={setOpenSnack}
    />
    <List>
      {MOCK.map((item, index) => <ListItem divider key={index}>
        <div>
          <ListItemAvatar style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar alt="wallet-icon" src={item.avatar} />
          </ListItemAvatar>
          <Typography align="center" style={{ marginTop: "10px" }}>{item.isActive ? "選択中" : ""}</Typography>
        </div>
        <Grid container direction="row" style={{ marginTop: "1em", marginBottom: "1em", marginLeft: "1em" }}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
            <div style={{ display: "flex" }}>
              <Typography variant="subtitle1">{item.address}</Typography>
              <CopyIconButton text={item.address} onClick={() => setOpenSnack(true)} />
            </div>
            <Typography variant="subtitle2">マルチシグ：{item.multisig ? "有効" : "未設定"}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <img height="30px" width="30px" src={SYMBOL_LOGO} style={{ marginRight: "10px" }} />
              <Typography align="right" variant="h6">{item.balance.toLocaleString()}</Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ marginTop: "10px", display: "flex" }}>
              <div style={{ flexGrow: 1 }}>
                {item.isActive || <Tooltip title="選択" style={{ marginLeft: "10px" }}>
                  <IconButton>
                    <CheckIcon />
                  </IconButton>
                </Tooltip>}
                <Tooltip title="アドレスのQRコードを表示" style={{ marginLeft: "10px" }}>
                  <IconButton>
                    <QrCodeIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <Tooltip title="エクスプローラーを開く">
                <IconButton style={{ marginLeft: "10px" }}>
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </ListItem>)}
    </List>
  </>;
}

export function WalletCreatePanel(): JSX.Element {
  const [mode, setMode] = useState<"private_key" | "mnemonic">("private_key");
  const [isOpenQRCamera, setOpenQRCamera] = useState<boolean>(false);
  const [isSubmitModalOpen, setSubmitModalOpen] = useState<boolean>(false);

  return <><Container>
    <div style={{ marginTop: "1em" }}>
      <Select
        label="生成方法"
        state={mode}
        setState={setMode}
        options={[{ label: "秘密鍵", value: "private_key" }, { label: "ニーモニック", value: "mnemonic" }]}
      />
    </div>
    <div style={{ marginTop: "1em" }}>
      <TextField label="アカウント名" placeholder="お好みの名称を登録" fullWidth style={{ marginBottom: "1em" }} />
      <TextField
        label={mode === "private_key" ? "秘密鍵" : "ニーモニック"}
        placeholder="手入力、もしくはQRを読み込み"
        fullWidth
        style={{ marginBottom: "1em" }}
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <IconButton onClick={() => setOpenQRCamera(true)}><QrIcon /></IconButton>
          </InputAdornment>
        }} />
      <Button color="primary" variant="contained" fullWidth style={{ maxWidth: "600px", marginBottom: "1em" }}>登録</Button>
    </div>
  </Container>
    <StackModal open={isSubmitModalOpen} onClose={() => setSubmitModalOpen(false)}>
      <Container>
        <div style={{ marginTop: "1em" }}>
          <div style={{ display: "flex" }}>
            <Typography gutterBottom variant="h6" fontWeight="bold" style={{ flexGrow: 1 }}>
              アドレス選択
            </Typography>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div>
          <List style={{ overflowY: "scroll" }}>
            {["XXXX-XXXX-XXXX-XXXX", "XXXX-XXXX-XXXX-XXXX"].map((item, index) => <ListItemButton divider key={index.toString()}>
              <div style={{ width: "100%" }}>
                <Typography variant="subtitle1">{item}</Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="body1" style={{ flexGrow: 1 }}>残高</Typography>
                  <Typography variant="body1" align="right">{(10000).toLocaleString()}</Typography>
                </div>
              </div>
            </ListItemButton>)}
          </List>
        </div>
      </Container>
    </StackModal>
    {isOpenQRCamera && <QrCodeReader setOpen={setOpenQRCamera} onRead={e => {
      setOpenQRCamera(false);
      console.log(e);
    }} />}
  </>;
}

export function WalletDeletePanel(): JSX.Element {

  const [isOpenSnack, setOpenSnack] = useState<boolean>(false);

  const MOCK = [
    {
      name: "メインウォレット",
      address: "xxxx-xxxx-xxxx-xxxx-xxxx",
      balance: 300000000,
      multisig: true,
      avatar: defaultUserIcon,
      isActive: true,
    },
    ...new Array(20).fill("").map((_, index) => ({
      name: "サブウォレット",
      address: "xxxx-xxxx-xxxx-xxxx-xxx" + index.toString(),
      balance: Math.random() * 1000 * index,
      multisig: false,
      avatar: defaultUserIcon,
      isActive: false,
    }))
  ];

  return <>
    <Snackbar
      duration={3000}
      message="コピーしました"
      open={isOpenSnack}
      setOpen={setOpenSnack}
    />
    <List>
      {MOCK.map((item, index) => <ListItemButton divider key={index}>
        <div>
          <ListItemAvatar style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar alt="wallet-icon" src={item.avatar} />
          </ListItemAvatar>
          <Typography align="center" style={{ marginTop: "10px" }}>{item.isActive ? "選択中" : ""}</Typography>
        </div>
        <Grid container direction="row" style={{ marginTop: "1em", marginBottom: "1em", marginLeft: "1em" }}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
            <Typography variant="subtitle1">{item.address}</Typography>
            <Typography variant="subtitle2">マルチシグ：{item.multisig ? "有効" : "未設定"}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <img height="30px" width="30px" src={SYMBOL_LOGO} style={{ marginRight: "10px" }} />
              <Typography align="right" variant="h6">{item.balance.toLocaleString()}</Typography>
            </div>
          </Grid>
        </Grid>
      </ListItemButton>)}
    </List>
  </>;
}