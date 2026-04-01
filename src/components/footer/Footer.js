import React from "react";
import "./Footer.scss";
import {FaLinkedin, FaEnvelope, FaGithub} from "react-icons/fa";
import {greeting, socialMediaLinks, contactInfo} from "../../portfolio";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{greeting.username}</p>
          <p className="footer-role">{greeting.role}</p>
        </div>

        <nav className="footer-mini-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#github">GitHub</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-links" aria-label="Social links">
          {contactInfo.email_address && (
            <a
              href={`mailto:${contactInfo.email_address}`}
              aria-label="Send email"
            >
              <FaEnvelope />
            </a>
          )}
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} {greeting.username}. All rights
        reserved.
      </p>
    </footer>
  );
}
