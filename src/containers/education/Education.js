import React from "react";
import {Fade} from "react-reveal";
import "./Education.scss";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) return null;

  return (
    <Fade bottom duration={700} distance="20px">
      <section className="main education-section" id="education">
        <p className="section-kicker">Academic background</p>
        <h2 className="section-title">Education</h2>

        <div className="education-list">
          {educationInfo.schools.map((school, index) => (
            <article key={index} className="education-card">
              {school.logo && (
                <div className="education-logo-wrap">
                  <img
                    src={school.logo}
                    alt={`${school.schoolName} logo`}
                    className="education-logo"
                  />
                </div>
              )}
              <div className="education-body">
                <h3 className="education-degree">{school.subHeader}</h3>
                <p className="education-school">{school.schoolName}</p>
                <p className="education-detail">
                  {school.location && (
                    <span className="education-location">
                      {school.location}
                      {" \u2014 "}
                    </span>
                  )}
                  <span className="education-duration">{school.duration}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Fade>
  );
}
