import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo}) {
  return (
    <article className="experience-card">
      <header className="experience-card-header">
        <div className="experience-logo-wrap">
          <img
            className="experience-logo"
            src={cardInfo.companylogo}
            alt={`${cardInfo.company} logo`}
          />
        </div>
        <div className="experience-meta">
          <p className="experience-company">{cardInfo.company}</p>
          <h3 className="experience-role">{cardInfo.role}</h3>
        </div>
        <p className="experience-date">{cardInfo.date}</p>
      </header>

      <div className="experience-body">
        <p className="experience-desc">{cardInfo.desc}</p>
        {cardInfo.descBullets?.length > 0 && (
          <ul className="experience-bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
