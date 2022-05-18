import CardContent from "@mui/material/CardContent/CardContent";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography/Typography";
import { Card } from "../components/atom/Card";
import { Header } from "../components/atom/Header";
import CableIcon from "@mui/icons-material/Cable";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import IconButton from "@mui/material/IconButton/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List/List";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Button from "@mui/material/Button/Button";
import ListItem from "@mui/material/ListItem/ListItem";
import { Container } from "../components/atom/Container";

export function HarvestPage(): JSX.Element {

  const theme = useTheme();

  return <>
    <Header />
    <Container  >
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6" fontWeight="bold">ハーベスト設定</Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" fontWeight="bold">委任状況</Typography>
          <div style={{ backgroundColor: theme.palette.success.main, borderRadius: "10px", padding: "20px 20px 20px 20px" }}>
            <div style={{ display: "flex" }}>
              <Typography style={{ flexGrow: 1 }} fontWeight="bold" color={theme.palette.success.contrastText}>
                ステータス
              </Typography>
              <Typography fontWeight="bold" color={theme.palette.success.contrastText}>
                委任中
              </Typography>
            </div>
            <Typography style={{ overflowX: "scroll" }}>https://hogehogehogehogehogehogehogehogehogehogehogehoge.com:3001</Typography>
          </div>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" fontWeight="bold">委任設定</Typography>
          <TextField fullWidth label="検索" size="small" placeholder="URLから検索" InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton size="small">
                <SearchIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          }} />
          <List>
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
            </ListItem >
            {new Array(30).fill({ node: "https://nodenodenodenodenodenodenodenodenode:3001" }).map((item, index) => <ListItemButton key={index.toString()} divider style={{ paddingLeft: 0, paddingRight: 0, paddingTop: "1em", paddingBottom: "1em" }}>
              <ListItemText primaryTypographyProps={{ style: { overflowX: "scroll" } }} primary={item.node} />
              <CableIcon style={{ marginLeft: "10px" }} />
            </ListItemButton>)}
          </List>
        </CardContent>
      </Card>
    </Container>
  </>;
}
