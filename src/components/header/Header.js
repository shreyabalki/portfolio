import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const navItems = [
  {label: "Work", href: "#projects"},
  {label: "About", href: "#about"},
  {label: "Experience", href: "#experience"},
  {label: "Skills", href: "#skills"},
  {label: "Contact", href: "#contact"}
];

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Headroom>
      <header className={`header ${isDark ? "is-dark" : "is-light"}`}>
        <a href="#greeting" className="logo" onClick={closeMenu}>
          {greeting.username}
        </a>

        <button
          className={`menu-icon ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navicon"></span>
        </button>

        <nav id="primary-nav" className={`menu ${isMenuOpen ? "open" : ""}`}>
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <div className="toggle-item" aria-label="Toggle theme">
            <ToggleSwitch />
          </div>
        </nav>
      </header>
    </Headroom>
  );
}

export default Header;
