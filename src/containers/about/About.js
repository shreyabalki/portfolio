import React from "react";
import {Fade} from "react-reveal";
import {aboutSection} from "../../portfolio";
import "./About.scss";

export default function About() {
  if (!aboutSection.display) return null;

  return (
    <Fade bottom duration={800} distance="18px">
      <section className="main about-section" id="about">
        <div className="about-header">
          <p className="section-kicker">About</p>
          <h2 className="about-title">{aboutSection.title}</h2>
        </div>

        <div className="about-content">
          <p className="about-summary">{aboutSection.summary}</p>
          <ul className="about-points">
            {aboutSection.focusPoints.map((point, index) => (
              <li key={index}>
                <span className="about-point-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Fade>
  );
}
