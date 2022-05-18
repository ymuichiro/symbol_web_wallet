import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid/Grid";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Typography from "@mui/material/Typography/Typography";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { defaultUserIcon } from "../assets/defaultUserIcon";
import { Card } from "../components/atom/Card";
import { Container } from "../components/atom/Container";
import { Header } from "../components/atom/Header";
import { StackModal } from "../components/atom/StackModal";
import { ToggleLanguage } from "../components/modal/ToggleLanguage";
import { ToggleNetwork } from "../components/modal/ToggleNetwork";
import { ToggleWallet } from "../components/modal/ToggleWallet";

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
      <ModalSelecter item={item} setItem={setItem} />
    </Container>
  </>;
}

function ModalSelecter({ item, setItem }: { item: ITEM; setItem: Dispatch<SetStateAction<ITEM>>; }): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (item === ITEM.NONE) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [item]);

  const onCloseHandle = () => {
    setOpen(false);
    setItem(ITEM.NONE);
  };

  return <StackModal open={open} onClose={onCloseHandle} >
    {
      (() => {
        if (item === ITEM.WALLET) {
          return <ToggleWallet onClose={onCloseHandle} />;
        } else if (item === ITEM.NETWORK) {
          return <ToggleNetwork onClose={onCloseHandle} />;
        } else if (item === ITEM.LANGUAGE) {
          return <ToggleLanguage onClose={onCloseHandle} />;
        } else {
          return <></>;
        }
      })()
    }
  </StackModal>;
}