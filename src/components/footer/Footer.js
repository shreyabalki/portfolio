import React from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <div className="footer-text">
          <p>© {new Date().getFullYear()} Srimonchaari Padmanabhan Babu</p>
          <p>AI Engineer | Drone Technologist | Embedded Systems Enthusiast</p>
          <p className="footer-icons">
            <a href="mailto:srimonchaari@gmail.com" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://linkedin.com/in/srimon"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </p>
        </div>
      </div>
    </Fade>
  );
}
