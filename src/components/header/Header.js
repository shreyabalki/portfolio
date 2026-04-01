import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Headroom>
      <header className={`header ${isDark ? "is-dark" : "is-light"}`}>
        <a href="/" className="logo">
          {greeting.username}
        </a>

        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="toggle-item" aria-label="Toggle theme">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
