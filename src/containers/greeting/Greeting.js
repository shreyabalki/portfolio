import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
// import landingPerson from "../../assets/lottie/landingPerson";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ShreyaImage from "../../assets/images/shreya.jpg"; // ✅ Your real image

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Left Column */}
          <div className="greeting-text-div">
            <h1 className="greeting-text">
              Hi all,&nbsp;I'm <span className="greeting-name">Shreya</span>
              <span className="wave-emoji">{emoji("👋")}</span>
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
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({behavior: "smooth"});
                    }
                  }, 100); // slight delay lets layout settle
                }}
              />

              {greeting.resumeLink && (
                <Button
                  text="Download My Resume"
                  href="/SHREYA CHAGANDI BALAKRISHNAN Resume_.pdf"
                  download={true}
                />
              )}
            </div>
          </div>

          {/* Right Column with Real Image */}
          <div className="greeting-image-div">
            <img
              src={ShreyaImage}
              alt="Shreya"
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
