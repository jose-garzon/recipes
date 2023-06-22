import { style } from "@vanilla-extract/css";
import { vars } from "../shared/theme";

export const title = style({
  marginBottom: vars.spacing.large,
});

export const landingSection = style({
  margin: `${vars.spacing.large} 0`,
});

export const categoriesSection = style({
  display: "flex",
  gap: vars.spacing.small,
  flexWrap: "wrap",
  marginTop: vars.spacing.small,
});

export const recommendedSection = style({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: vars.spacing.small,
  marginTop: vars.spacing.small,
});
