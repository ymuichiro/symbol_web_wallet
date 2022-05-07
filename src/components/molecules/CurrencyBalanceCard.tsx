import CardContent from "@mui/material/CardContent/CardContent";
import IconButton from "@mui/material/IconButton/IconButton";
import Typography from "@mui/material/Typography/Typography";
import CopyIcon from "@mui/icons-material/CopyAllTwoTone";
import { NeonCard } from "../atom/Card";
import { Address } from "symbol_sdk_min/dist/Address";

export function CurrencyBalanceCard(): JSX.Element {
  return <NeonCard style={{ width: "100%" }}>
    <CardContent>
      <Typography variant="body2" align="left" fontWeight="bold">
        Address
      </Typography>
      <Typography variant="body2" align="left" style={{ whiteSpace: "inherit", width: "100%", margin: "0px", display: "inline" }}>
        {Address.createFromRawAddress("NARXCCAQZI6IZKCSVVIYGEYQ4PJYBNGVJETLQTQ").pretty()}
      </Typography>
      <IconButton style={{ padding: "0px 8px 0px 8px" }}>
        <CopyIcon />
      </IconButton>
    </CardContent>
    <CardContent>
      <Typography variant="body2" align="left" fontWeight="bold">Symbol Balance</Typography>
      <Typography variant="h3" align="right">10,000.000</Typography>
    </CardContent>
  </NeonCard>;
};
