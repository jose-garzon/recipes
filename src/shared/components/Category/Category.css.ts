import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const category = style({
  cursor: "pointer",
});

export const categoryImage = style({
  aspectRatio: "1/1",
  border: "2px solid",
  borderColor: "transparent",
  borderRadius: vars.spacing.nano,
  display: "block",
  marginBottom: vars.spacing.nano,
  objectFit: "cover",
  width: "100px",
});
