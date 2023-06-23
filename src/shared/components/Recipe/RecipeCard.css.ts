import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const recipeImage = style({
  width: "100%",
  objectFit: "cover",
  borderRadius: vars.spacing.medium,
});

export const recipeMetadata = style({
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
});

export const nameText = style({
  gridColumn: "1/-1",
  fontWeight: "bold",
});

export const metadataText = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.nano,
});
