import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const navbar = style({
  display: "flex",
  listStyle: "none",
  justifyContent: "space-between",
});

export const navItem = style({
  flexGrow: "2",
  textAlign: "center",
  padding: vars.spacing.medium,
  cursor: "pointer",
});
