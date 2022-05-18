import { FC, Dispatch, SetStateAction } from "react";
import MuiSnackbar from "@mui/material/Snackbar/Snackbar";
import IconButton from "@mui/material/IconButton/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  message: string;
  duration: number;
};

export const Snackbar: FC<Partial<Props>> = props => {

  const onCloseHandle = () => {
    if (props.setOpen) {
      props.setOpen(false);
    }
  };

  return <MuiSnackbar
    open={props.open}
    autoHideDuration={props.duration || 5000}
    onClose={onCloseHandle}
    message={props.message}

    action={<IconButton color="inherit" size="small" onClick={onCloseHandle}>
      <CloseIcon fontSize="small" />
    </IconButton>}
  />;
};