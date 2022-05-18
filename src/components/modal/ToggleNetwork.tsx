import Container from "@mui/material/Container/Container";
import IconButton from "@mui/material/IconButton/IconButton";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Typography from "@mui/material/Typography/Typography";
import CloseIcon from "@mui/icons-material/Close";
import CableIcon from "@mui/icons-material/Cable";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import Button from "@mui/material/Button/Button";
import CardContent from "@mui/material/CardContent/CardContent";

type Props = {
  onClose: () => void;
};


export function ToggleNetwork(props: Props): JSX.Element {

  /** 代替接続は止める */

  return <CardContent style={{ marginTop: "1.5em" }}>
    <Container>
      <div style={{ marginBottom: "1.5em", display: "flex" }}>
        <Typography variant="h6" fontWeight="bold" style={{ flexGrow: 1 }}>
          ネットワーク切り替え
        </Typography>
        <IconButton onClick={props.onClose} style={{ padding: "0px 16px 0px 0px" }}>
          <CloseIcon />
        </IconButton>

      </div>

      <Typography gutterBottom variant="subtitle1" fontWeight="bold" style={{ marginTop: "1em" }}>
        現在の設定値
      </Typography>

      <List>
        <ListItem divider ><div /></ListItem>
        <ListItem divider style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ListItemText primary="接続中のノード" secondary="https://hogehogehoge.jp" />
        </ListItem>
        <ListItem divider style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ListItemText primary="接続中のネットワーク種別" secondary="メインネット" />
        </ListItem>
      </List>

      <Typography variant="subtitle1" fontWeight="bold" style={{ marginTop: "1em" }}>
        接続先変更
      </Typography>
      <Typography gutterBottom variant="caption" color="textSecondary" style={{ marginTop: "1em" }}>
        変更したい接続先を選択してください
      </Typography>
      <List>
        <ListItem divider ><div /></ListItem>
        <ListItem divider style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ width: "100%" }}>
            <Typography variant="subtitle2" >手入力</Typography>
            <TextField
              size="small"
              placeholder="例）https://sample.com:3001"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <Button variant="contained" size="small">反映</Button>
                </InputAdornment>
              }} />
          </div>
        </ListItem>
        {
          new Array(30).fill("").map((_, i) => ({ node: "https://hogehogehogehogehogehogehogehoge" + i, fee: 10 }))
            .map((item, index) => <ListItemButton key={index.toString()} divider style={{ paddingLeft: 0, paddingRight: 0 }}>
              <ListItemText primaryTypographyProps={{ overflow: "scroll", paddingBottom: "0.5em" }} primary={item.node} secondary={`最小手数料: ${item.fee.toLocaleString()}`} />
              <CableIcon fontSize="small" style={{ marginLeft: "10px" }} />
            </ListItemButton>)
        }
      </List>

    </Container>
  </CardContent >;
}