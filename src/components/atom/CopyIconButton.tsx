import IconButton from "@mui/material/IconButton/IconButton";
import CopyIcon from "@mui/icons-material/CopyAllTwoTone";
import { copyClipboard } from "../../utils/native";

type Props = {
  text: string;
  onClick?: () => void;
};

export function CopyIconButton(props: Props): JSX.Element {

  const onClick = () => {
    copyClipboard(props.text);
    if (props.onClick) {
      props.onClick();
    }
  };

  return <IconButton size="small" style={{ padding: "0px 8px 0px 8px" }} onClick={onClick}>
    <CopyIcon fontSize="small" />
  </IconButton>;
}