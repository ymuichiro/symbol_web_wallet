import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Typography from "@mui/material/Typography/Typography";
import { MAIN_NET_CURRENCY_NAME, MAIN_NET_CURRENCY_MOSAICID } from "../../utils/constant";

export function MosaicsCard(): JSX.Element {
  return <Card style={{ marginTop: "1em", flexGrow: 1, overflow: "scroll" }}>
    <CardContent>
      <Typography variant="body2" fontWeight={"bold"}>
        Mosaic
      </Typography>
      <List>
        {[
          { name: MAIN_NET_CURRENCY_NAME, id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic1", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic2", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic3", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic4", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic4", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic4", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic4", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic4", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
          { name: "any mosaic4", id: MAIN_NET_CURRENCY_MOSAICID, amount: "10,000.000" },
        ].map((item, index) => <ListItem key={index.toString()} divider button>
          <ListItemText primary={item.name} secondary={item.id} />
          <ListItemText primary={item.amount} primaryTypographyProps={{ textAlign: "right" }} />
        </ListItem>)}
      </List>
    </CardContent>
  </Card>;
}