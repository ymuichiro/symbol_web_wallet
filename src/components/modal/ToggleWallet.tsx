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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import QrCodeIcon from "@mui/icons-material/QrCode2TwoTone";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import ListItem from "@mui/material/ListItem/ListItem";
import CheckIcon from "@mui/icons-material/Check";

export function ToggleWallet(): JSX.Element {
  const [networkType, setNetworkType] = useState<NetworkType>(NetworkType.TEST_NET);
  const [tab, setTab] = useState(0);

  const handleTabChange = (_: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return <>
    <CardContent style={{ marginTop: "1.5em" }}>
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h5" fontWeight="bold">ウォレット切替</Typography>
      </Container>
    </CardContent>
    <CardContent>
      <Container maxWidth="lg">
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Select
              state={networkType}
              setState={setNetworkType}
              label={"ネットワークタイプ"}
              options={[
                { label: "メインネット", value: NetworkType.MAIN_NET },
                { label: "テストネット", value: NetworkType.TEST_NET },
              ]}
            />
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
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

export function WalletChangePanel(props: WalletChangePanelProps): JSX.Element {

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
            <Typography variant="subtitle1">{item.address}</Typography>
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
                <Tooltip title="選択" style={{ marginLeft: "10px" }}>
                  <IconButton>
                    <CheckIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="アドレスをコピー" style={{ marginLeft: "10px" }}>
                  <IconButton>
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
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

  return <div style={{ marginTop: "1em" }}>
    <Typography color="textSecondary" style={{ marginBottom: "1em" }}>
      ウォレットの追加方法を選択してください。ブラウザにはニーモニックを保持していません。既存のニーモニックに対してアドレスの追加を行いたい場合は再度手元のニーモニックを以下へ登録して下さい。
    </Typography>
    <Select
      label="生成方法"
      state={mode}
      setState={setMode}
      options={[{ label: "秘密鍵", value: "private_key" }, { label: "ニーモニック", value: "mnemonic" }]}
    />
  </div>;
}
