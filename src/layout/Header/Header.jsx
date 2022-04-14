import React, { useState, useEffect } from "react";
import "./Header.css";
// assets
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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
    const active = document.querySelector(".active-nav");
    active.classList.remove("active-nav");
    e.target.classList.add("active-nav");
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
          {/* <img src={logo} alt="" className="logo-mobile" /> */}
          <div className={`nav_ul ${open ? "open-nav" : ""}`}>
            <a className="active-nav" onClick={openFunc} href="#home">
              Home
            </a>
            <a onClick={openFunc} href="#about">
              About
            </a>
            <a onClick={openFunc} href="#collection">
              Collection
            </a>
            <a onClick={openFunc} href="#road">
              Roadmap
            </a>
            <a onClick={openFunc} href="#team">
              Team
            </a>
            <a onClick={openFunc} href="#faq">
              Faq
            </a>
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
