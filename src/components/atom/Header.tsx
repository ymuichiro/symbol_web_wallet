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
import AgricultureIcon from "@mui/icons-material/Agriculture";
import KeyIcon from "@mui/icons-material/Key";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useRecoilState } from "recoil";
import { displayColorModeAtom } from "../../store/mode";
import { DisplayModeSwitch } from "./DisplayModeSwitch";
import { useTheme } from "@mui/material/styles";
import { SITE_LOGO_DARK, SITE_LOGO_LIGHT } from "../../assets/logo";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

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
    title: "DecentralizeAuth",
    icon: KeyIcon,
    path: navigationPaths.decentralizeAuthPage,
  },
  {
    title: "Credentials",
    icon: AssignmentIndIcon,
    path: navigationPaths.credentialsPage,
  },
  {
    title: "Harvest",
    icon: AgricultureIcon,
    path: navigationPaths.harvestPage,
  },
  {
    title: "Setting",
    icon: SettingIcon,
    path: navigationPaths.settingsPage,
  },
];

/**
 * Application Static Top Header
 */
export function Header(): JSX.Element {

  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [logo, setLogo] = useState<string>(theme.palette.mode === "dark" ? SITE_LOGO_DARK : SITE_LOGO_LIGHT);
  const [mode, setMode] = useRecoilState(displayColorModeAtom);
  const navigate = useNavigate();

  const toggleDisplayMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    setLogo(mode === "dark" ? SITE_LOGO_LIGHT : SITE_LOGO_DARK);
  };

  const clickMenuButton = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return <>
    <AppBar color="default" position="fixed" style={{ padding: "0px 10px 0px 10px", boxShadow: "0px 0px 0px 0px transparent inset" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" style={{ marginRight: "20px" }} onClick={clickMenuButton}>
          <MenuIcon />
        </IconButton>
        <img
          height={"100%"}
          width={"150px"}
          alt="logo"
          src={logo}
        />
        <div style={{ flexGrow: 1 }} />
        <DisplayModeSwitch checked={mode === "light"} onClick={toggleDisplayMode} />
      </Toolbar>
    </AppBar>
    <Drawer anchor="left" open={isOpen} onClose={closeDrawer}>
      <List style={{ minWidth: "300px", maxWidth: "90vw" }}>
        <ListItem divider style={{ display: "flex", justifyContent: "center", width: "100%", padding: "1.7rem 0px 2rem 0px" }} >
          <img
            height={"100%"}
            width={"150px"}
            alt="logo"
            src={logo}
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