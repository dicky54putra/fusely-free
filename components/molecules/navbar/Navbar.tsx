import { CloseIcon, HamburgerIcon } from "components/atoms/icons";
import Logo from "components/atoms/Logo";
import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import MenuItem from "./MenuItem";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [widthScreen, setWidthScreen] = useState(0);

  useEffect(() => {
    setWidthScreen(screen.width);
  }, []);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container px-4 lg:px-0 mt-4 lg:mt-10 flex justify-between items-center">
      <div className="nav-logo z-50">
        <Logo />
      </div>
      {widthScreen > 1024 ? (
        <MenuManagement />
      ) : (
        <div
          className={[
            styles["nav-wrapper"],
            isOpen ? styles["active"] : "",
          ].join(" ")}>
          <MenuManagement />
        </div>
      )}
      <div
        className="nav-hamburger cursor-pointer z-50 lg:hidden"
        onClick={handleClick}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </div>
    </div>
  );
};

const MenuManagement = () => {
  return (
    <>
      <div className="nav-menus flex flex-col gap-9 lg:flex-row">
        <MenuItem isActive>Home</MenuItem>
        <MenuItem>Features</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Contact</MenuItem>
      </div>
      <div className="nav-cta absolute bottom-4 flex gap-4 lg:relative lg:bottom-0">
        <Button isLink href="/home" variant="outlined">
          Log in
        </Button>
        <Button isLink href="/home">
          Get Started
        </Button>
      </div>
    </>
  );
};

export default Navbar;
