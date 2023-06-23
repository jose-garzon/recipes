import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const recommendedContainer = style({
  cursor: "pointer",
});

export const recommendedImage = style({
  width: "100%",
  height: "100px",
  objectFit: "cover",
  borderRadius: vars.spacing.small,
});
