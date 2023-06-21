import { style } from "@vanilla-extract/css";
import { vars } from "../shared/theme";

export const title = style({
  marginBottom: vars.spacing.large,
});

export const categoriesSection = style({
  display: "flex",
  gap: vars.spacing.small,
  flexWrap: "wrap",
});
