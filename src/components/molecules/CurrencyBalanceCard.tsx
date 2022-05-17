import { useState } from "react";
import { NeonCard } from "../atom/Card";
import { Address } from "symbol_sdk_min/dist/Address";
import { Snackbar } from "../atom/Snackbar";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import { CopyIconButton } from "../atom/CopyIconButton";

export function CurrencyBalanceCard(): JSX.Element {
  const [isOpenSnack, setOpenSnack] = useState<boolean>(false);

  return <NeonCard style={{ width: "100%" }}>
    <Snackbar open={isOpenSnack} setOpen={setOpenSnack} duration={3000} message={"コピーしました"} />
    <CardContent>
      <Typography variant="body2" align="left" fontWeight="bold">
        Address
      </Typography>
      <Typography variant="body2" align="left" style={{ whiteSpace: "inherit", width: "100%", margin: "0px", display: "inline" }}>
        {Address.createFromRawAddress("NARXCCAQZI6IZKCSVVIYGEYQ4PJYBNGVJETLQTQ").pretty()}
      </Typography>
      <CopyIconButton
        text={Address.createFromRawAddress("NARXCCAQZI6IZKCSVVIYGEYQ4PJYBNGVJETLQTQ").pretty()}
        onClick={() => setOpenSnack(true)}
      />
    </CardContent>
    <CardContent>
      <Typography variant="body2" align="left" fontWeight="bold">Symbol Balance</Typography>
      <Typography variant="h3" align="right">10,000.000</Typography>
    </CardContent>
  </NeonCard>;
};
