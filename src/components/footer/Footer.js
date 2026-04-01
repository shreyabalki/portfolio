import React from "react";
import "./Footer.scss";
import {FaLinkedin, FaEnvelope, FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-name">Shreya Chagandi Balakrishnan</p>
          <p className="footer-role">UI/UX Designer + AI Engineer</p>
        </div>
        <div className="footer-links" aria-label="Social links">
          <a href="mailto:shreyacb.eu@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/shreyabalki"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shreya-bala/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
