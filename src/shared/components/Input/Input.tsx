import { HTMLProps } from "react";
import { Icon, IconProps } from "../Icon";
import { container, input } from "./styles.css";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  initialIconType?: IconProps["type"];
}

export function Input(props: InputProps): JSX.Element {
  const { label, id, initialIconType, ...rest } = props;
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <div className={container}>
        {initialIconType && <Icon type="search" />}
        <input id={id} className={input} {...rest} />
      </div>
    </label>
  );
}
