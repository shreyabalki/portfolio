import React, {useContext, useEffect, useState} from "react";
import Headroom from "react-headroom"; // React Headroom
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext"; // Context for dark mode
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility

  // Handle scroll to automatically close menu on both desktop and mobile
  useEffect(() => {
    const handleScroll = () => {
      const menuCheckbox = document.getElementById("menu-btn");

      // Close the menu when the user scrolls (on both mobile and desktop)
      if (menuCheckbox.checked) {
        menuCheckbox.checked = false; // Uncheck the menu to close it
        setIsMenuOpen(false); // Update the state to close the menu
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the scroll listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        {/* Mobile menu toggle */}
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={isMenuOpen} // Use state to control the checkbox
          onChange={toggleMenu}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        {/* Navigation menu */}
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="/resume.html" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          )}

          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#!">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
