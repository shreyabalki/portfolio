import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import ShreyaImage from "../../assets/images/shreya.jpg";

export default function Greeting() {
  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={700} distance="20px">
      <section className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className="greeting-text">{greeting.title}</h1>
            <p className="greeting-role">{greeting.role}</p>
            <p className="greeting-text-p">{greeting.subTitle}</p>
            <div className="button-greeting-div">
              <Button text="View Work" href="#projects" />
              <Button
                text="Resume"
                href={greeting.resumeLink}
                newTab={true}
                className="secondary"
              />
            </div>
          </div>

          <div className="greeting-image-div">
            <img src={ShreyaImage} alt="Shreya" className="profile-picture" />
          </div>
        </div>
      </section>
    </Fade>
  );
}
