import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme";

const base = style({
  padding: 12,
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",
  transition: "300ms",
  ":active": {
    scale: "0.95",
    filter: "brightness(85%) hue-rotate(-20deg)",
  },
});

export const buttonColorVariants = styleVariants({
  brand: [
    base,
    { backgroundColor: vars.color.brand, color: vars.color.fontLight },
  ],
  secondary: [
    base,
    { backgroundColor: vars.color.secondary, color: vars.color.fontLight },
  ],
});

export const buttonSizeVariants = styleVariants({
  small: [base, { fontSize: vars.fontSize.small }],
  medium: [base, { fontSize: vars.fontSize.p }],
  large: [base, { fontSize: vars.fontSize.h3 }],
});

export const buttonTypeVariants = styleVariants({
  filled: [
    base,
    { backgroundColor: vars.color.brand, color: vars.color.fontLight },
  ],
  outlined: [
    base,
    {
      backgroundColor: vars.color.fontLight,
      border: `1px solid ${vars.color.brand}`,
    },
  ],
  text: [base, { background: "none" }],
});
