import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./shared/theme";

globalStyle("*", {
  fontFamily: '"Montserrat", sans-serif',
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("h1", {
  fontSize: vars.fontSize.h1,
  color: vars.color.fontDark,
});
globalStyle("h2", {
  fontSize: vars.fontSize.h2,
  color: vars.color.fontDark,
});
globalStyle("h3", {
  fontSize: vars.fontSize.h3,
  color: vars.color.fontDark,
});
globalStyle("p", {
  fontSize: vars.fontSize.p,
  color: vars.color.font,
});
globalStyle("small", {
  fontSize: vars.fontSize.small,
  color: vars.color.font,
});
