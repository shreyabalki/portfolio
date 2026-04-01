import React from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section className="main" id="skills">
      <h2 className="section-title">{skillsSection.title}</h2>
      <p className="section-kicker">{skillsSection.subTitle}</p>
      <div className="skills-grid">
        {skillsSection.skills.map((skill, index) => {
          const [title, ...rest] = skill.split(":");
          return (
            <article className="skill-card" key={index}>
              <h3>{title}</h3>
              <p>{rest.join(":").trim()}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
