import React from "react";
import {motion} from "framer-motion"
import projectStyle from "./project.module.css"

import { NavLink } from "react-router-dom";

const Project = ({textAnimation}) => {
  return ( 
    <motion.section 
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.4, once: true}}
    className={projectStyle.home__project__bg}>
        <div className={projectStyle.home__project__block}>
          <motion.h3 custom={2} variants={textAnimation} className={projectStyle.home__project__title}>Project Zen</motion.h3>
          <motion.p custom={3} variants={textAnimation}  className={projectStyle.home__project__text}>Zen - company that sells real estate in Turkey.
          The project is written in conjunction with Gulp, HTML, SCSS and JavaScript - Front-End
          </motion.p>
          <motion.button custom={4} variants={textAnimation} className={projectStyle.home__project__button}>
            <NavLink className={projectStyle.home__project__navlink} to="/zen">Learn More</NavLink>
          </motion.button>
      </div>
    </motion.section>
  );
}

export default Project
