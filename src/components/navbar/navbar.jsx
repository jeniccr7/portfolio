import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">jenic</a>
      </p>
      <p>
        <a href="#possibility">open AI</a>
      </p>
      <p>
        <a href="#features">case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="jenic__navbar">
      <div className="jenic__navbar-links">
        <div className="jenic__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="jenic__navbar-container">
          <Menu />
        </div>
        <div className="jenic__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="jenic__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="jenic__navbar-menu_container scale up center">
              <div className="jenic__navbar-menu-links">
                <Menu />
                <div className="jenic__navbar-container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
