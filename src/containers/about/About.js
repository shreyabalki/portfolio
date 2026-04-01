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
          <h2 className="about-headline">{aboutSection.summary}</h2>
        </div>

        <div className="about-tiles">
          {aboutSection.focusPoints.map((point, index) => (
            <div className="about-tile" key={index}>
              <span className="about-tile-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="about-tile-text">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
