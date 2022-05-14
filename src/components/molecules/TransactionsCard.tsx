import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import Button from "@mui/material/Button/Button";
import { Card } from "../atom/Card";
import { MAIN_NET_CURRENCY_NAME } from "../../utils/constant";
import Grid from "@mui/material/Grid/Grid";
import InsertLinkTwoToneIcon from "@mui/icons-material/InsertLinkTwoTone";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
import IconButton from "@mui/material/IconButton/IconButton";
import TextField from "@mui/material/TextField/TextField";
import Divider from "@mui/material/Divider/Divider";
import { NumericField } from "../atom/NumericField";
import { Select } from "../atom/Select";
import { useState } from "react";

type Props = {
  isSearch: boolean;
};

const StatusItems = [
  { label: "承認済み", value: "confirmed" },
  { label: "未承認", value: "unconfirmed" },
  { label: "署名待ち", value: "unsinged" }
];

const TypeItems = [
  { label: "転送", value: "transfer" },
  { label: "アグリゲートボンデッド", value: "aggregate" },
];

export function TransactionsCard(props: Props): JSX.Element {

  const [address, setAddress] = useState<string>("");
  const [fromHeight, setFromHeight] = useState<string>("");
  const [toHeight, setToHeight] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [type, setType] = useState<string>("");

  const clickReset = () => {
    [setAddress, setFromHeight, setToHeight, setStatus, setType].forEach(setState => {
      setState("");
    });
  };

  return <Card style={{ height: "100%", maxHeight: "100%", width: "100%" }}>
    <CardContent>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography variant="body2" fontWeight="bold" style={{ flexGrow: "1" }}>Transactions</Typography>
        <Button size="small" variant="text">エクスプローラーを開く</Button>
      </div>
    </CardContent>
    {props.isSearch && <CardContent>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <NumericField
              state={fromHeight}
              setState={setFromHeight}
              label={"Height（min）"}
              size="small"
              fullWidth
            />
            <Typography style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}>〜</Typography>
            <NumericField
              state={toHeight}
              setState={setToHeight}
              label={"Height（max）"}
              size="small"
              fullWidth
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            label="状態"
            size="small"
            state={status}
            setState={setStatus}
            options={StatusItems}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            label="種類"
            size="small"
            state={type}
            setState={setType}
            options={TypeItems}
          />
        </Grid>
        <Grid item xs={6}>
          <Button color="secondary" variant="contained" fullWidth size="small" onClick={clickReset}>リセット</Button>
        </Grid>
        <Grid item xs={6}>
          <Button color="primary" variant="contained" fullWidth size="small">検索</Button>
        </Grid>
      </Grid>
    </CardContent>}
    <Divider />
    <CardContent style={{ height: "100%", paddingTop: "0px" }}>
      <div style={{ maxHeight: "100%", overflowY: "auto" }}>
        <List >
          {[
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleUpOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
            { icon: ArrowCircleDownOutlinedIcon, opponent: "xxxx-xxxx-xxxx-xxxx", type: "Transfer", date: "2022/01/01 01:01:00", amount: "10", mosaic: MAIN_NET_CURRENCY_NAME },
          ].map((item, index) => <ListItem key={index.toString()} divider style={{ paddingLeft: "0px" }}>
            <Grid container direction="row" spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{item.opponent}</Typography>
                <Typography variant="body2" color="textSecondary">{item.date}</Typography>
              </Grid>
              <Grid item xs={6}>
                <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                  <Typography variant="body1">{item.mosaic}</Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ display: "flex", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
                  <Typography variant="h6" color="primary" align="right">+{item.amount}</Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                  <div style={{ flexGrow: 1 }}>
                    <Typography>{item.type}</Typography>
                  </div>
                  <div>
                    <IconButton>
                      <InsertLinkTwoToneIcon />
                    </IconButton>
                    <IconButton>
                      <PersonAddTwoToneIcon />
                    </IconButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          </ListItem>)}
        </List>
      </div>
    </CardContent>
  </Card>;
}