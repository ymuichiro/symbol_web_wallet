import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import List from "@mui/material/List/List";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import Button from "@mui/material/Button/Button";
import Divider from "@mui/material/Divider/Divider";
import { Card } from "../atom/Card";
import { MAIN_NET_CURRENCY_NAME } from "../../utils/constant";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import { styled } from "@mui/material";

const TabButton = styled(Button)({
  fontWeight: "bold",
  paddingLeft: "2em",
  paddingRight: "2em"
});

export function TransactionsCard(): JSX.Element {
  return <Card style={{ height: "100%", maxHeight: "100%", width: "100%" }}>
    <CardContent>
      <Typography variant="body2" fontWeight={"bold"}>Transactions</Typography>
    </CardContent>
    <CardContent style={{ paddingTop: "0px" }}>
      <ButtonGroup variant="text" color="primary" >
        <TabButton>履歴</TabButton>
        <TabButton>送信</TabButton>
        <TabButton>受取</TabButton>
        <TabButton>連署</TabButton>
      </ButtonGroup>
    </CardContent>
    <Divider />
    <CardContent style={{ height: "100%", paddingTop: "0px" }}>
      <div style={{ maxHeight: "100%", overflow: "scroll" }}>
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
          ].map((item, index) => <ListItem key={index.toString()} divider button>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.opponent} secondary={`${item.type}`} />
            <ListItemText primary={item.mosaic} secondary={item.amount} />
            <ListItemText primary={item.date} />
          </ListItem>)}
        </List>
      </div>
    </CardContent>
  </Card>;
}