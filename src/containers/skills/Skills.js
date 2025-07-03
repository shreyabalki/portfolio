import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  if (!skillsSection.display) return null;

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* Left: Lottie or SVG */}
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working at Desk"
                src={require("../../assets/images/developerActivity.svg")}
                className="skills-static-image"
              />
            )}
          </div>
        </Fade>

        {/* Right: Text Content */}
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "skills-heading dark-mode" : "skills-heading"}
            >
              {skillsSection.title}
            </h1>

            <p
              className={
                isDark
                  ? "skills-text-subtitle dark-mode subTitle"
                  : "skills-text-subtitle subTitle"
              }
            >
              {skillsSection.subTitle}
            </p>

            <SoftwareSkill />

            <div className="skills-bullets">
              {skillsSection.skills.map((skill, index) => (
                <p
                  key={index}
                  className={
                    isDark
                      ? "skills-text dark-mode subTitle"
                      : "skills-text subTitle"
                  }
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
