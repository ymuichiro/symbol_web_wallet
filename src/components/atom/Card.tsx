import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material";

export const Card = styled(MuiCard)({
  borderRadius: "10px",
});

export const NeonCard = styled(Card)({
  border: "2px solid #977BFF",
  boxShadow: "0 0 8px #977BFF",
});
