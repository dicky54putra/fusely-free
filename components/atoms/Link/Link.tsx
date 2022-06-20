import React from "react";
import LinkDom from "next/link";
import styles from "./Link.module.css";
import { TypographyClass } from "utils/StyleGuide/Typography";

interface LinkProps {
  children: any;
  href: string;
  className?: string;
}
const Link = (props: LinkProps) => {
  const { children, href = "/", className } = props;

  const cls = TypographyClass();
  const classNames = [cls["body4"], "relative", styles.after, className].join(
    " ",
  );
  return (
    <LinkDom href={href}>
      <a href="" className={classNames}>
        {children}
      </a>
    </LinkDom>
  );
};

export default Link;
