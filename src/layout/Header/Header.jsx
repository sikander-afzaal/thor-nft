import React, { useState, useEffect } from "react";
import "./Header.css";
// assets
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const openFunc = (e) => {
    setOpen((prev) => !prev);
    const header = document.querySelector(".header");
    if (!open === true) {
      header.classList.add("overflow");
    } else {
      setTimeout(() => {
        header.classList.remove("overflow");
      }, 300);
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <header className={`header ${navbar ? "black-nav" : ""}`}>
        <div className="h_container">
          <div className={`nav_ul ${open ? "open-nav" : ""}`}>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="home"
              offset={-150}
            >
              Home
            </ScrollLink>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="about"
              offset={-150}
            >
              About
            </ScrollLink>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="collection"
              offset={-250}
            >
              Collection
            </ScrollLink>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="road"
              offset={-250}
            >
              Roadmap
            </ScrollLink>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="team"
              offset={-250}
            >
              Team
            </ScrollLink>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="faq"
              offset={-150}
            >
              Faq
            </ScrollLink>
          </div>
          <FontAwesomeIcon
            onClick={openFunc}
            className="hamburger"
            icon={open ? faXmark : faBars}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
