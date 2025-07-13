import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ShreyaImage from "../../assets/images/shreya.jpg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Text Section */}
          <div className="greeting-text-div">
            <h1 className="greeting-text">
              Hi all,&nbsp;I'm <span className="greeting-name">Shreya</span>
              <span className="wave-emoji" role="img" aria-label="waving hand">
                {emoji("👋")}
              </span>
            </h1>

            <p
              className={`greeting-text-p ${isDark ? "dark-mode" : "subTitle"}`}
            >
              {greeting.subTitle}
            </p>

            <div id="resume" className="empty-div" />

            <SocialMedia />

            <div className="button-greeting-div">
              <Button
                text="Contact Me"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({behavior: "smooth", block: "start"});
                  }
                }}
              />

              <Button
                text="Download My Resume"
                href="https://drive.google.com/uc?export=download&id=1exKOMeRlv3lHM9T6qzSJysBKcjePmyki"
                newTab={true}
                download={true}
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="greeting-image-div">
            <img
              src={ShreyaImage}
              alt="Shreya's profile"
              className="profile-picture"
              draggable={false}
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
