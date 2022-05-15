import Grid from "@mui/material/Grid/Grid";
import { Container } from "../components/atom/Container";
import { Header } from "../components/atom/Header";
import { defaultUserIcon } from "../assets/defaultUserIcon";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography/Typography";
import { Card } from "../components/atom/Card";
import List from "@mui/material/List/List";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItem from "@mui/material/ListItem/ListItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import { StackModal } from "../components/atom/StackModal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ToggleWallet } from "../components/modal/ToggleWallet";
import { ToggleNetwork } from "../components/modal/ToggleNetwork";
import { ToggleLanguage } from "../components/modal/ToggleLanguage";

const ListItemStyled = styled(ListItemButton)({
  paddingTop: "1.5em",
  paddingBottom: "1.5em",
});

enum ITEM {
  NONE,
  WALLET,
  NETWORK,
  LANGUAGE,
}

export function SettingsPage(): JSX.Element {
  const [item, setItem] = useState<ITEM>(ITEM.NONE);

  return <>
    <Header />
    <div style={{ height: "1em" }} />
    <Container>
      <Grid container direction="row" spacing={5}>
        <Grid item xs={12} sm={12} md={2}>
          <Grid container direction="row" spacing={3} alignItems="center">
            <Grid item xs={3} sm={3} md={12}>
              <Tooltip title="アバター切り替え">
                <div style={{ position: "relative", width: "100%" }}>
                  <img src={defaultUserIcon} alt="user-icon" width="100%" />
                </div>
              </Tooltip>
            </Grid>
            <Grid item xs={9} sm={9} md={12}>
              <Tooltip title="ウォレット名変更">
                <Typography variant="h6" fontWeight="bold">User name</Typography>
              </Tooltip>
              <Typography variant="subtitle1" color="textSecondary">Network: Main</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          <Card>
            <List style={{ paddingTop: "0px", paddingBottom: "0px" }}>
              <ListItem divider>
                <ListItemText primary="設定" primaryTypographyProps={{ fontWeight: "bold" }} />
              </ListItem>
              <ListItemStyled divider onClick={() => setItem(ITEM.WALLET)}>
                <ListItemText primary="ウォレット切り替え" secondary="xxxx-xxxx-xxxx-xxxx-xxxx" />
                <ExpandMoreIcon fontSize="medium" color="secondary" />
              </ListItemStyled>
              <ListItemStyled divider onClick={() => setItem(ITEM.NETWORK)} >
                <ListItemText primary="ネットワーク切り替え" secondary="https://hogehogehoge.jp:3001" />
                <ExpandMoreIcon fontSize="medium" color="secondary" />
              </ListItemStyled>
              <ListItemStyled divider onClick={() => setItem(ITEM.LANGUAGE)}>
                <ListItemText primary="言語切り替え" secondary="日本語" />
                <ExpandMoreIcon fontSize="medium" color="secondary" />
              </ListItemStyled>
            </List>
          </Card>
        </Grid>
      </Grid>
      {item !== ITEM.NONE && <ModalSelecter item={item} setItem={setItem} />}
    </Container>
  </>;
}

function ModalSelecter({ item, setItem }: { item: ITEM; setItem: Dispatch<SetStateAction<ITEM>>; }): JSX.Element {

  const onCloseHandle = () => {
    setItem(ITEM.NONE);
  };

  if (item === ITEM.WALLET) {
    return <StackModal isOpen={true} onClose={onCloseHandle} >
      <ToggleWallet />
    </StackModal>;
  } else if (item === ITEM.NETWORK) {
    return <StackModal isOpen={true} onClose={onCloseHandle} >
      <ToggleNetwork />
    </StackModal>;
  } else if (item === ITEM.LANGUAGE) {
    return <StackModal isOpen={true} onClose={onCloseHandle} >
      <ToggleLanguage onClose={onCloseHandle} />
    </StackModal>;
  } else {
    return <></>;
  }
}