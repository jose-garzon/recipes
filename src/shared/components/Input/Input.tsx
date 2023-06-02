import { HTMLProps } from "react";
import { Icon } from "../Icon";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  // initialIcon?:
}

export function Input(props: InputProps): JSX.Element {
  const { label, id, ...rest } = props;
  return (
    <label htmlFor={id} className="flex flex-col">
      <span>{label}</span>
      <div className="flex items-center p-8 bg-slate-950">
        <Icon type="search" />
        <input id={id} {...rest} />
      </div>
    </label>
  );
}
