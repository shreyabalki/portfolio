import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo}) {
  return (
    <article className="experience-card">
      <div className="experience-card-header">
        <div className="experience-header-left">
          <h3 className="experience-role">{cardInfo.role}</h3>
          <p className="experience-meta">
            {cardInfo.company}
            {cardInfo.location && (
              <span className="experience-location">
                {" "}
                &mdash; {cardInfo.location}
              </span>
            )}
          </p>
        </div>
        <p className="experience-date">{cardInfo.date}</p>
      </div>

      {cardInfo.descBullets?.length > 0 && (
        <ul className="experience-bullets">
          {cardInfo.descBullets.map((item, i) => (
            <li key={i}>
              <span className="bullet-text">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
