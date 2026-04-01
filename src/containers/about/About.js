import React from "react";
import {Fade} from "react-reveal";
import {aboutSection} from "../../portfolio";
import "./About.scss";

export default function About() {
  if (!aboutSection.display) return null;

  return (
    <Fade bottom duration={800} distance="18px">
      <section className="main about-section" id="about">
        <div className="about-intro">
          <p className="section-kicker">About</p>
          <h2 className="about-title">{aboutSection.title}</h2>
          <p className="about-summary">{aboutSection.summary}</p>
        </div>
        <div className="about-points" aria-label="Core strengths">
          {aboutSection.focusPoints.map((point, index) => (
            <article key={index} className="about-point-card">
              <span className="about-point-index">0{index + 1}</span>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>
    </Fade>
  );
}
