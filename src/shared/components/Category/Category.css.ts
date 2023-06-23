import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const category = style({
  cursor: "pointer",
  position: "relative",
  border: "2px solid",
  transition: "300ms",
  borderColor: vars.color.brand,
  borderRadius: vars.spacing.nano,
  ":hover": {
    borderColor: vars.color.action,
  },
});

export const categoryImage = style({
  aspectRatio: "1/1",
  display: "block",
  objectFit: "cover",
  width: "150px",
  height: "50px",
  opacity: 0.3,
});

export const categoryName = style({
  position: "absolute",
  fontWeight: "bold",
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
});
