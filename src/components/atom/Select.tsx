import FormControl from "@mui/material/FormControl/FormControl";
import { InputBaseProps } from "@mui/material/InputBase/InputBase";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select/Select";
import { CSSProperties, Dispatch, SetStateAction } from "react";

export type SelectItem = {
  label: string | undefined;
  value: string;
};

type Props<T> = {
  label: string;
  fullWidth: boolean;
  style: CSSProperties;
  state: T;
  setState: Dispatch<SetStateAction<T>>;
  options: SelectItem[];
  size: InputBaseProps["size"];
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
      fullWidth={props.fullWidth}
      label={props.label}
      style={props.style}
      value={props.state as any}
      onChange={onChangeHandle}
    >
      {
        props.options?.map((item, index) => <MenuItem key={index} value={item.value}>
          {item.label}
        </MenuItem>)
      }
    </MuiSelect>
  </FormControl>;
}