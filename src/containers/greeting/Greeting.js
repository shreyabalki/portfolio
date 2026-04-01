import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import ShreyaImage from "../../assets/images/shreya.jpg";

export default function Greeting() {
  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={700} distance="24px">
      <section className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <p className="greeting-eyebrow">{greeting.role}</p>
            <h1 className="greeting-text">
              Designing with clarity.
              <span>Engineering with intelligence.</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <div className="button-greeting-div">
              <Button text="View Work" href="#projects" />
              {greeting.resumeLink && (
                <Button
                  text="Resume"
                  href={greeting.resumeLink}
                  newTab={true}
                  className="secondary"
                />
              )}
            </div>
          </div>

          <div className="greeting-image-div">
            <div className="profile-picture-wrap">
              <img
                src={ShreyaImage}
                alt={`${greeting.username} profile`}
                className="profile-picture"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
