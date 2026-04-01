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
            <p className="greeting-eyebrow">{greeting.role}</p>
            <h1 className="greeting-text">
              Designing digital products with clarity.
              <span> Engineering AI that solves real problems.</span>
            </h1>
            <p className="greeting-text-p">{greeting.subTitle}</p>
            <div className="button-greeting-div">
              <Button text="View Work" href="#projects" />
<<<<<<< HEAD
=======
              <Button
                text="Resume"
                href={greeting.resumeLink}
                newTab={true}
                className="secondary"
              />
>>>>>>> origin/main
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
