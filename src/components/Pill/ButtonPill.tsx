import { HTMLAttributes } from "react";
import { Pill, PillProps } from ".";

export interface ButtonPillProps
  extends PillProps,
    HTMLAttributes<HTMLButtonElement> {
  children: HTMLAttributes<HTMLButtonElement>["children"];
}

export function ButtonPill(props: ButtonPillProps) {
  const { children, variant, ...rest } = props;

  return (
    <button {...rest}>
      <Pill variant={variant}>{children}</Pill>
    </button>
  );
}
