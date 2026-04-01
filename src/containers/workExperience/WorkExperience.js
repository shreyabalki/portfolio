import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <section className="experience-container" id="experience">
        <Fade bottom duration={900} distance="18px">
          <h2 className="section-title experience-heading">Experience</h2>
          <p className="section-kicker experience-kicker">
            Impact-first roles and measurable contribution
          </p>
          <div className="experience-cards-div">
            {workExperiences.experience.map((card, i) => (
              <ExperienceCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  company: card.company,
                  desc: card.desc,
                  date: card.date,
                  companylogo: card.companylogo,
                  role: card.role,
                  descBullets: card.descBullets
                }}
              />
            ))}
          </div>
        </Fade>
      </section>
    );
  }
  return null;
}
