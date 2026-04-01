import React, {useEffect, useState} from "react";
// Importing components using default imports as expected
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import WorkExperience from "./workExperience/WorkExperience";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";

// Importing `splashScreen` from portfolio (likely a named export)
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(() => {
        setIsShowingSplashAnimation(false);
      }, splashScreen.duration);

      return () => clearTimeout(splashTimer);
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark, changeTheme}}>
        {isShowingSplashAnimation ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Projects />
            <About />
            <WorkExperience />
            <Skills />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
