import React, {useState, useEffect} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Github from "./github/Github";
import Education from "./education/Education";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {useTheme} from "../hooks/useTheme";

export default function Main() {
  const [showSplash, setShowSplash] = useState(splashScreen.enabled);
  const {isDark, toggleTheme} = useTheme();

  useEffect(() => {
    if (!splashScreen.enabled) return;
    const t = setTimeout(() => setShowSplash(false), splashScreen.duration);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <div
        className={
          showSplash
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Greeting />
          <About />
          <Skills />
          <WorkExperience />
          <Github />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
