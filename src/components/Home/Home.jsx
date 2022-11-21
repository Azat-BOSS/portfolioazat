import React, { useEffect } from "react";
import homeStyle from "./home.module.css";

import Project from "./Project/Project";
import MestoProject from "./MestoProject/MestoProject";
import ProjitoProject from "./ProjitoProject/ProjitoProject";
import ModalContact from "../ModalContact/ModalContact";

import { textAnimation, textAnimationZen, textAnimationProjito } from "../../animations/animation.js"
const Home = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop()
  }, [])
  return (
    <div className={homeStyle.home}>
      <ModalContact/>
      <Project textAnimation={textAnimation} className={homeStyle.scroll}/>
      <MestoProject textAnimationZen={textAnimationZen} className={homeStyle.scroll}/>
      <ProjitoProject textAnimationProjito={textAnimationProjito} className={homeStyle.scroll}/>
    </div>
  );
};

export default Home;
