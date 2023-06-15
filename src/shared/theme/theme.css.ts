import { createGlobalTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";

createGlobalTheme(":root", vars, {
  color: {
    brand: "#333333",
    secondary: "#666666",
    action: "#999999",
    error: "#CCCCCC",
    success: "#E5E5E5",
    warning: "#F2F2F2",
    font: "#595959",
    fontDark: "#000000",
    fontLight: "#FFFFFF",
  },
  spacing: {
    none: "0px",
    nano: "6px",
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  fontSize: {
    h1: "36px",
    h2: "30px",
    h3: "24px",
    p: "16px",
    small: "12px",
  },
});
