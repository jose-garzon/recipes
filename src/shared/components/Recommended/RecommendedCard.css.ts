import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const recommendedContainer = style({
  cursor: "pointer",
  transition: "300ms",
  ":hover": {
    scale: 1.01,
  },
});

export const recommendedImage = style({
  width: "100%",
  height: "100px",
  objectFit: "cover",
  borderRadius: vars.spacing.small,
});
