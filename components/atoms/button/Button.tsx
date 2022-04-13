import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: (e: object) => void;
  variant: "primary" | "outlined" | "white";
  type: "submit" | "button";
  size?: "sm" | "md";
  isLink?: boolean;
  isDisabled?: boolean;
  href?: string;
}

const Button = (props: Partial<ButtonProps>) => {
  const {
    text = "Button",
    onClick,
    variant,
    type,
    size,
    isDisabled,
    href = "/",
    isLink,
  } = props;

  const prop = {
    onClick: onClick,
    className: "text-3xl font-bold underline ",
  };

  if (isDisabled) {
    return <span {...prop}>{text}</span>;
  }

  if (isLink) {
    return (
      <Link href={href}>
        <a {...prop}>{text}</a>
      </Link>
    );
  }
  return <div>Button</div>;
};

export default Button;
