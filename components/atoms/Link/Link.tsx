import React from "react";
import LinkDom from "next/link";
import { typographyClass } from "../StyleGuide";
import styles from "./Link.module.css";

interface Link {
  children: any;
  href: string;
  className?: string;
}

const Link = (props: Partial<Link>) => {
  const { children, href = "/", className } = props;

  const cls = typographyClass();
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
