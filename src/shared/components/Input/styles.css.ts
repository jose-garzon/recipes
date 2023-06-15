import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const container = style({
  backgroundColor: vars.color.fontLight,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.spacing.nano} ${vars.spacing.small}`,
  border: "2px solid",
  borderRadius: "100px",
  transition: "300ms",
  borderColor: vars.color.brand,
  ":focus-within": {
    borderColor: vars.color.action,
  },
});

export const input = style({
  width: "100%",
  marginLeft: vars.spacing.small,
  background: "none",
  border: "none",
  outline: "none",
});
