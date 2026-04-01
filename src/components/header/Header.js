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
      <header className={`header ${isDark ? "is-dark" : "is-light"}`}>
        <a href="/" className="logo" onClick={closeMenu}>
          {greeting.username}
        </a>

        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(prev => !prev)}
        />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label="Toggle navigation"
        >
          <span className="navicon"></span>
        </label>

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
          <li className="toggle-item" aria-label="Toggle theme">
            <ToggleSwitch />
          </li>
          {greeting.resumeLink && (
            <li>
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-pill"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
