import FormControl from "@mui/material/FormControl/FormControl";
import { InputBaseProps } from "@mui/material/InputBase/InputBase";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select/Select";
import { CSSProperties, Dispatch, SetStateAction } from "react";

export type SelectItem<T> = {
  label: string | undefined;
  value: T;
};

type Props<T> = {
  label: string;
  fullWidth: boolean;
  style: CSSProperties;
  state: T;
  setState: Dispatch<SetStateAction<T>>;
  options: SelectItem<T>[];
  size: InputBaseProps["size"];
  variant: "standard" | "outlined" | "filled";
};

export function Select<T>(props: Partial<Props<T>>): JSX.Element {

  const onChangeHandle = (e: SelectChangeEvent) => {
    if (props.setState !== undefined) {
      props.setState(e.target.value as any);
    }
  };

  return <FormControl fullWidth size={props.size}>

    {typeof props.label === "string" && <InputLabel >
      {props.label}
    </InputLabel>}

    <MuiSelect
      variant={props.variant}
      fullWidth={props.fullWidth}
      label={props.label}
      style={props.style}
      value={props.state as any}
      onChange={onChangeHandle}
    >
      {
        props.options?.map((item, index) => <MenuItem key={index} value={item.value as any}>
          {item.label}
        </MenuItem>)
      }
    </MuiSelect>
  </FormControl>;
}