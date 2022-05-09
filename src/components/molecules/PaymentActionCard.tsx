import { SetStateAction, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { navigationPaths } from "../../utils/constant";
import { CenteringBox } from "../atom/CenteringBox";
import IconButton from "@mui/material/IconButton/IconButton";
import Typography from "@mui/material/Typography/Typography";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import QrCode2TwoTone from "@mui/icons-material/QrCode2TwoTone";

type Props = {
  setIsOpenQrReader: Dispatch<SetStateAction<boolean>>;
};

export function PaymentActionCard(props: Props): JSX.Element {

  const navigation = useNavigate();

  const clickOpenQrReader = () => {
    props.setIsOpenQrReader(true);
  };

  return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "3em", marginBottom: "3em" }}>
    <IconButton onClick={() => navigation(navigationPaths.recievePage)}>
      <CenteringBox>
        <ArrowCircleDownOutlinedIcon fontSize="large" />
        <Typography variant="body1" align="center">
          受取
        </Typography>
      </CenteringBox>
    </IconButton>
    <IconButton>
      <CenteringBox>
        <ArrowCircleUpOutlinedIcon fontSize="large" />
        <Typography variant="body1" align="center">
          送信
        </Typography>
      </CenteringBox>
    </IconButton>
    <IconButton onClick={clickOpenQrReader}>
      <CenteringBox>
        <QrCode2TwoTone fontSize="large" />
        <Typography variant="body1" align="center">
          QR読込
        </Typography>
      </CenteringBox>
    </IconButton>
  </div>;
}
