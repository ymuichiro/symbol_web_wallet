import TextField from "@mui/material/TextField/TextField";
import { CSSProperties } from "react";

type P = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>,
  label?: string;
  style?: CSSProperties;
  required?: boolean;
  fullWidth?: boolean;
};

export function NumericField(props: P) {

  const onChangeHandle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const result = Math.abs(Number(e.target.value)).toString();

    if (result === "NaN") {
      props.setState("");
    } else {
      props.setState(result);
    }
  };

  return <TextField
    fullWidth={props.fullWidth}
    required={props.required}
    value={props.state}
    onChange={onChangeHandle}
    label={props.label}
    style={props.style}
    inputProps={{
      inputMode: "numeric",
      pattern: "[0-9]*"
    }}
  />;
}