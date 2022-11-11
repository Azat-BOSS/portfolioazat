import React from "react";
import Project from "./Project/Project";
import homeStyle from "./home.module.css";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: custom * 0.6,
      type: "spring",
    },
  }),
};

const Home = () => {
  return (
    <div className={homeStyle.home}>
      <Project textAnimation={textAnimation}/>
    </div>
  );
};

export default Home;
