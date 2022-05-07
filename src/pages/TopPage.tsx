import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import { Header } from "../components/atom/Header";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { CurrencyBalanceCard } from "../components/molecules/CurrencyBalanceCard";
import { MosaicsCard } from "../components/molecules/MosaicsCard";
import { TransactionsCard } from "../components/molecules/TransactionsCard";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton/IconButton";

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
  return <Container maxWidth="md" style={{ paddingTop: "1em", paddingBottom: "10em" }}>
    <Grid container direction="column" spacing={3} >
      <Grid item>
        <CurrencyBalanceCard />
      </Grid>
      <Grid item>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "1em", marginBottom: "1em" }}>
          <IconButton>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <ArrowCircleDownOutlinedIcon fontSize="large" />
              <Typography variant="body1" align="center">受取</Typography>
            </div>
          </IconButton>
          <IconButton>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <ArrowCircleUpOutlinedIcon fontSize="large" />
              <Typography variant="body1" align="center">送信</Typography>
            </div>
          </IconButton>
          <IconButton>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <ArrowCircleUpOutlinedIcon fontSize="large" />
              <Typography variant="body1" align="center">QR読込</Typography>
            </div>
          </IconButton>
        </div>
      </Grid>
      <Grid item>
        <MosaicsCard />
      </Grid>
    </Grid>
  </Container >;
}

export function Desktop(): JSX.Element {
  const theme = useTheme();

  return <Container maxWidth={"xl"}>
    <Grid container direction="row" spacing={2} style={{ height: "90vh" }}>
      <Grid item xs={4} style={{ height: "100%" }}>
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: theme.spacing(2) }}>
            <CurrencyBalanceCard />
          </div>
          <MosaicsCard />
        </div>
      </Grid>
      <Grid item xs={8} style={{ height: "100%" }}>
        <TransactionsCard />
      </Grid>
    </Grid>
  </Container >;
}