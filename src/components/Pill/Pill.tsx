import { ReactNode } from "react";
import { Typography } from "../Typography";

type Variant = "filled" | "outlined";
export interface PillProps {
  children: ReactNode;
  variant: Variant;
}

const variantStyles: { [key in Variant]: ClassName } = {
  filled: "b bg-amber-500 border-stone-100",
  outlined: "bg-stone-100 border-gray-950",
};
const baseStyles: ClassName = "inline-block border-2 px-4 rounded-full";

export function Pill(props: PillProps) {
  const { children, variant } = props;
  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      <Typography
        component="small"
        color={variant === "filled" ? "light" : "text"}
      >
        {children}
      </Typography>
    </span>
  );
}
