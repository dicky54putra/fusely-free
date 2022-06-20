import Link from "next/link";
import React from "react";
import { ButtonClass } from "utils/StyleGuide/Button";

interface ButtonProps {
  onClick?: (e: object) => void;
  variant?: "primary" | "outlined" | "white";
  type?: "submit" | "button";
  isLink?: boolean;
  isDisabled?: boolean;
  href?: string;
  children: any;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const {
    onClick,
    variant = "primary",
    type,
    className,
    isDisabled,
    href = "/",
    children,
    isLink,
  } = props;

  const childText = children;

  const cls = ButtonClass(className);

  const prop = {
    onClick: onClick,
    className: cls[variant],
    type: type,
  };

  if (isDisabled) {
    return <span {...prop}>{childText}</span>;
  }

  if (isLink) {
    return (
      <Link href={href}>
        <a {...prop}>{childText}</a>
      </Link>
    );
  }

  return <button {...prop}>{childText}</button>;
};

export default Button;
