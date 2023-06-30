import { HTMLAttributes, ReactNode } from "react";

type ClassName = HTMLAttributes<HTMLHeadingElement>["className"];

type Component = "h1" | "h2" | "h3" | "p" | "small";
type Size = "xl" | "lg" | "md" | "sm" | "xs";
type Colors = "brand" | "text" | "light";
type Weight = "light" | "normal" | "bold";

export interface TypographyProps {
  children: ReactNode;
  component: Component;
  size?: Size;
  color?: Colors;
  weight?: Weight;
}

const sizeByComponent: { [key in Component]: Size } = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  p: "sm",
  small: "xs",
};

const sizeClassnames: { [key in Size]: ClassName } = {
  xl: "text-5xl",
  lg: "text-3xl",
  md: "text-2xl",
  sm: "text-base",
  xs: "text-sm",
};
const colorsClassnames: { [key in Colors]: ClassName } = {
  brand: "text-amber-500",
  light: "text-stone-100",
  text: "text-gray-950",
};
const weightClassnames: { [key in Weight]: ClassName } = {
  light: "font-light",
  normal: "font-normal",
  bold: "font-bold",
};

const isHeading = (component: Component) => {
  return ["h1", "h2", "h3"].includes(component);
};

export function Typography(props: TypographyProps) {
  const {
    children,
    component,
    size,
    color,
    weight = "normal",
    ...rest
  } = props;
  const headingColor: Colors = isHeading(component) ? "brand" : "text";
  const weightColor: Weight = isHeading(component) ? "bold" : weight;
  const sizeStyles = size
    ? sizeClassnames[size]
    : sizeClassnames[sizeByComponent[component]];
  const colorsStyles = colorsClassnames[color ?? headingColor];
  const weightStyles = weightClassnames[weightColor];
  const tagProps = {
    ...rest,
    className: `${sizeStyles} ${colorsStyles} ${weightStyles}`,
  };

  if (component === "h1") return <h1 {...tagProps}>{children}</h1>;
  if (component === "h2") return <h2 {...tagProps}>{children}</h2>;
  if (component === "h3") return <h3 {...tagProps}>{children}</h3>;
  if (component === "p") return <p {...tagProps}>{children}</p>;
  if (component === "small") return <span {...tagProps}>{children}</span>;
}
