import { styled } from "@mui/material/styles";

export const Toolbar = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar
}));