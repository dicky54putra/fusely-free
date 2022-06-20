export interface TypographyProps {
  children: any;
  className?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "body3"
    | "body4";
  component?:
    | "p"
    | "div"
    | "span"
    | "small"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  [key: string]: any;
}
