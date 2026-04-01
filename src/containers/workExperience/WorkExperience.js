import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

export default function WorkExperience() {
  if (!workExperiences.display) return null;

  return (
    <section className="experience-container" id="experience">
      <Fade bottom duration={800} distance="18px">
        <p className="section-kicker">Career</p>
        <h2 className="section-title experience-heading">Experience</h2>
        <div className="experience-cards-div">
          {workExperiences.experience.map((card, i) => (
            <ExperienceCard
              key={i}
              cardInfo={{
                role: card.role,
                company: card.company,
                location: card.location,
                date: card.date,
                descBullets: card.descBullets
              }}
            />
          ))}
        </div>
      </Fade>
    </section>
  );
}
