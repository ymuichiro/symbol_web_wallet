import { useState } from "react";
import { Header } from "../components/atom/Header";
import { useTheme } from "@mui/material/styles";
import { CurrencyBalanceCard } from "../components/molecules/CurrencyBalanceCard";
import { MosaicsCard } from "../components/molecules/MosaicsCard";
import { TransactionsCard } from "../components/molecules/TransactionsCard";
import { QrCodeReader } from "../components/molecules/QRCodeReader";
import { PaymentActionCard } from "../components/molecules/PaymentActionCard";
import { Container } from "../components/atom/Container";
import Grid from "@mui/material/Grid/Grid";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";


export function TopPage(): JSX.Element {

  const theme = useTheme();
  const [isOpenQRCamera, setIsOpenQRCamera] = useState<boolean>(false);
  const match = useMediaQuery(theme.breakpoints.up("lg"));

  return <>
    <Header />
    <div style={{ height: "1em" }} />
    <Container >
      <Grid container direction="row" spacing={2} style={{ height: "90vh" }}>
        <Grid item xs={12} sm={12} md={12} lg={4} style={{ height: "100%" }}>
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: theme.spacing(2) }}>
              <CurrencyBalanceCard />
            </div>
            <PaymentActionCard setIsOpenQrReader={setIsOpenQRCamera} />
            <MosaicsCard />
          </div>
        </Grid>
        {
          match && <Grid item xs={12} sm={12} md={12} lg={8} style={{ height: "100%" }}>
            <TransactionsCard isSearch={false} />
          </Grid>
        }
      </Grid>
      {isOpenQRCamera && <QrCodeReader onRead={e => {
        setIsOpenQRCamera(false);
        console.log(e);
      }} setOpen={setIsOpenQRCamera} />}
    </Container >;
  </>;
}
