import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Headroom>
      <header
        className={`header ${isDark ? "is-dark" : "is-light"} ${isMenuOpen ? "menu-open" : ""}`}
      >
        <a href="/" className="logo" onClick={closeMenu}>
          {greeting.username}
        </a>

        <nav className="nav" aria-label="Main navigation">
          <ul className="menu">
            <li>
              <a href="#projects" onClick={closeMenu}>
                Work
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li className="toggle-item">
              <ToggleSwitch />
            </li>
          </ul>
        </nav>

        <button
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>
    </Headroom>
  );
}

export default Header;
