import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigationPaths } from "../../utils/constant";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingIcon from "@mui/icons-material/Settings";
import Drawer from "@mui/material/Drawer/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import WalletIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import ListItem from "@mui/material/ListItem/ListItem";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import KeyIcon from "@mui/icons-material/Key";
import ReceiptIcon from "@mui/icons-material/Receipt";

const drawerList = [
  {
    title: "Wallet",
    icon: WalletIcon,
    path: navigationPaths.topPage,
  },
  {
    title: "Transaction",
    icon: ReceiptIcon,
    path: navigationPaths.transactionsPage,
  },
  {
    title: "Network",
    icon: SettingsEthernetIcon,
    path: navigationPaths.networkPage,
  },
  {
    title: "Auth",
    icon: KeyIcon,
    path: "",
  },
  {
    title: "Harvest",
    icon: AgricultureIcon,
    path: navigationPaths.harvestPage,
  }
];

/**
 * Application Static Top Header
 */
export function Header(): JSX.Element {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const clickMenuButton = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return <>
    <AppBar position="static" color="transparent" style={{ padding: "0px 10px 0px 10px", boxShadow: "0px 0px 0px 0px transparent inset" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" style={{ marginRight: "20px" }} onClick={clickMenuButton}>
          <MenuIcon />
        </IconButton>
        <img
          src="https://github.com/ymuichiro/symbol_japan_forum/blob/main/logo/cc_0/Symbol_Logo_Wordmark_Light_BG.png?raw=true"
          height={"100%"}
          width={"150px"}
          alt="logo"
        />
        <div style={{ flexGrow: 1 }} />
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <SettingIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer anchor="left" open={isOpen} onClose={closeDrawer}>
      <List style={{ minWidth: "300px", maxWidth: "90vw" }}>
        <ListItem divider style={{ display: "flex", justifyContent: "center", width: "100%", padding: "1.7rem 0px 2rem 0px" }} >
          <img
            src="https://github.com/ymuichiro/symbol_japan_forum/blob/main/logo/cc_0/Symbol_Logo_Wordmark_Light_BG.png?raw=true"
            height={"100%"}
            width={"150px"}
            alt="logo"
          />
        </ListItem>
        {
          drawerList.map((item, index) => <ListItemButton divider key={index.toString()} onClick={() => navigate(item.path)} >
            <item.icon style={{ marginRight: "10px" }} />
            <ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: "bold" }} />
          </ListItemButton>)
        }
      </List>
    </Drawer>
  </>;
}