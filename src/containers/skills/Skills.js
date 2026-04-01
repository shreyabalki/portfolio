import React from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section className="main" id="skills">
      <h2 className="section-title">Capabilities</h2>
      <p className="section-kicker">Design · Development · AI/ML</p>

      <div className="capabilities-grid">
        {skillsSection.skills.map((skill, index) => {
          const [title, list] = skill.split(":");
          const items = list.split(",").map(item => item.trim());
          return (
            <article className="capability-block" key={index}>
              <h3>{title}</h3>
              <ul>
                {items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
