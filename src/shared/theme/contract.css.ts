import { createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    brand: "color-brand",
    secondary: "color-secondary",
    action: "color-action",
    error: "color-error",
    success: "color-success",
    warning: "color-warning",
    font: "color-font",
    fontLight: "color-fontLight",
    fontDark: "color-fontDark",
  },
  spacing: {
    none: "none",
    nano: "nano",
    small: "small",
    medium: "medium",
    large: "large",
  },
  fontSize: {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    small: "small",
  },
});
