import React from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section className="main" id="skills">
      <h2 className="skills-heading">{skillsSection.title}</h2>
      <p className="skills-text-subtitle">{skillsSection.subTitle}</p>
      <div className="skills-bullets">
        {skillsSection.skills.map((skill, index) => (
          <p key={index} className="skills-text">
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}
