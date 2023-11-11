import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutSideClickHandler from "react-outside-click-handler";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpen && "-100%",
      };
    }
  };
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutSideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className=" flexCenter h-menu" style={getMenuStyle(menuOpen)}>
            <a href="#Residencies">Residencies</a>
            <a href="#OurValue">Our Value</a>
            <a href="#ContactUs">Contact Us</a>
            <a href="#GetStarted">Get Started</a>
            <button className="button">
              <a href="#Contact">Contact</a>
            </button>
          </div>
        </OutSideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
