import React from "react";
import {Fade} from "react-reveal";
import {aboutSection} from "../../portfolio";
import "./About.scss";

export default function About() {
  if (!aboutSection.display) return null;

  return (
    <Fade bottom duration={800} distance="18px">
      <section className="main about-section" id="about">
        <h2 className="about-title">{aboutSection.title}</h2>
        <p className="about-summary">{aboutSection.summary}</p>
        <ul className="about-points">
          {aboutSection.focusPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>
    </Fade>
  );
}
