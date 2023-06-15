import { HTMLAttributes } from "react";

import {
  buttonColorVariants,
  buttonSizeVariants,
  buttonTypeVariants,
} from "./styles.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color: keyof typeof buttonColorVariants;
  size: keyof typeof buttonSizeVariants;
  type: keyof typeof buttonTypeVariants;
}

export function Button(props: ButtonProps) {
  const { children, color, size, type, ...rest } = props;

  return (
    <button
      className={[
        buttonColorVariants[color],
        buttonSizeVariants[size],
        buttonTypeVariants[type],
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
