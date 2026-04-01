import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo}) {
  return (
    <article className="experience-card">
      <div className="experience-div-company">
        <img
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />
        <div>
          <p className="experience-text-company">{cardInfo.company}</p>
          <h3 className="experience-text-role">{cardInfo.role}</h3>
        </div>
        <p className="experience-text-date">{cardInfo.date}</p>
      </div>

      <div className="experience-text-details">
        <p className="experience-text-desc">{cardInfo.desc}</p>
        <ul>
          {cardInfo.descBullets?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
