import React from "react";
import { TypographyClass } from "utils/StyleGuide/Typography";
import { TypographyProps } from "./TypographyType";

const Typography = (props: TypographyProps) => {
  const {
    children,
    variant = "body1",
    component = "p",
    className,
    ...another
  } = props;

  const cls = TypographyClass(className);

  const prop = {
    className: cls[variant],
    ...another,
  };

  const comp = {
    div: <div {...prop}>{children}</div>,
    p: <p {...prop}>{children}</p>,
    span: <span {...prop}>{children}</span>,
    small: <small {...prop}>{children}</small>,
    h1: <h1 {...prop}>{children}</h1>,
    h2: <h2 {...prop}>{children}</h2>,
    h3: <h3 {...prop}>{children}</h3>,
    h4: <h4 {...prop}>{children}</h4>,
    h5: <h5 {...prop}>{children}</h5>,
    h6: <h6 {...prop}>{children}</h6>,
  };

  return comp[component];
};

export default Typography;
