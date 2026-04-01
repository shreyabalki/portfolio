import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
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
            <h1 className="greeting-text">{greeting.username}</h1>
            <p className="greeting-subtitle">{greeting.subTitle}</p>
            <div className="button-greeting-div">
              <a href="#github" className="btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
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
