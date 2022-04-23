import Link from "next/link";
import React from "react";
import { buttonClass } from "../StyleGuide";

interface ButtonProps {
  text: string;
  onClick?: (e: object) => void;
  variant: "primary" | "outlined" | "white";
  type: "submit" | "button";
  isLink?: boolean;
  isDisabled?: boolean;
  href?: string;
  children?: any;
  className?: string;
}

const Button = (props: Partial<ButtonProps>) => {
  const {
    text = "Button",
    onClick,
    variant = 'primary',
    type,
    className,
    isDisabled,
    href = "/",
    children,
    isLink,
  } = props;

  const childText = children ?? text;
  
  const cls = buttonClass(className);

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
