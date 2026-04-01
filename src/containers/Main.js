import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import WorkExperience from "./workExperience/WorkExperience";
import Statement from "./statement/Statement";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";

import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  // Apply theme class to <body> so CSS variables cascade correctly from root
  useEffect(() => {
    document.body.className = isDark ? "theme-dark" : "theme-light";
  }, [isDark]);

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
          <Statement />
          <Contact />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </StyleProvider>
  );
};

export default Main;
