import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import { Header } from "../components/atom/Header";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { CurrencyBalanceCard } from "../components/molecules/CurrencyBalanceCard";
import { MosaicsCard } from "../components/molecules/MosaicsCard";
import { TransactionsCard } from "../components/molecules/TransactionsCard";


export function TopPage(): JSX.Element {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return <>
    <Header />
    <div style={{ height: "1em" }} />
    {isDesktop ? <Desktop /> : <Mobile />}
  </>;
}

export function Mobile(): JSX.Element {
  return <>

  </>;
}

export function Desktop(): JSX.Element {

  return <>
    <Container maxWidth={"xl"}>
      <Grid container direction="row" spacing={2} style={{ height: "90vh" }}>
        <Grid item xs={4} style={{ height: "100%" }}>
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div>
              <CurrencyBalanceCard />
            </div>
            <MosaicsCard />
          </div>
        </Grid>
        <Grid item xs={8} style={{ height: "100%" }}>
          <TransactionsCard />
        </Grid>
      </Grid>
    </Container>
  </>;
}