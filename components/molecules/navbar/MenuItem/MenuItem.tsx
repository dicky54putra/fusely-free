import Link from "next/link";
import React from "react";
import styles from "./MenuItem.module.css";

interface MenuItem {
  children: string;
  href?: string;
  isActive?: boolean;
}
const MenuItem = (props: Partial<MenuItem>) => {
  const { children, href = "/", isActive } = props;
  const classActive = isActive
    ? ["text-neutral-500 after:bg-primary-300", styles.active].join(" ")
    : "text-neutral-300";
  return (
    <Link href={href}>
      <a
        className={[
          "font-sans text-body3 leading-body-3 font-bold relative hover:text-neutral-500",
          classActive,
        ].join(" ")}>
        {children}
      </a>
    </Link>
  );
};

export default MenuItem;
