import React from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section className="main skills-section" id="skills">
      <div className="skills-header">
        <p className="section-kicker">{skillsSection.subTitle}</p>
        <h2 className="section-title">{skillsSection.title}</h2>
      </div>

      <div className="capabilities-grid">
        {skillsSection.skills.map(({category, items}) => (
          <article className="capability-block" key={category}>
            <h3 className="capability-category">{category}</h3>
            <ul className="capability-list">
              {items.map(item => (
                <li key={item} className="capability-item">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
