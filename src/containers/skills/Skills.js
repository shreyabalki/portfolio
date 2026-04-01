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
        {skillsSection.skillGroups.map(group => (
          <article className="capability-block" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
