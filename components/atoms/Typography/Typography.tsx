import React from "react";
import { typographyClass } from "../StyleGuide";

interface TypographyProps {
  children: any;
  className?: string,
  variant?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'body1'|'body2'|'body3'|'body4';
  component?: 'p'|'div'|'span'|'small'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
  [key: string]: any;
}

const Typography = (props: Partial<TypographyProps>) => {

  const {children, variant = "body1", component='p', className, ...another} = props;

  const cls = typographyClass(className);

  const prop = {
    className: cls[variant],
    ...another
  }

  const comp = {
    'div': <div {...prop}>{children}</div>,
    'p': <p {...prop}>{children}</p>,
    'span': <span {...prop}>{children}</span>,
    'small': <small {...prop}>{children}</small>,
    'h1': <h1 {...prop}>{children}</h1>,
    'h2': <h2 {...prop}>{children}</h2>,
    'h3': <h3 {...prop}>{children}</h3>,
    'h4': <h4 {...prop}>{children}</h4>,
    'h5': <h5 {...prop}>{children}</h5>,
    'h6': <h6 {...prop}>{children}</h6>
  }

  return comp[component];
};

export default Typography;
