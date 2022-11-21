import React from "react";
import { NavLink } from "react-router-dom";

import zenProjectStyle from "./mestoproject.module.css"
import {motion} from "framer-motion"

const MestoProject = ({textAnimationZen}) => {
  return (  
    <motion.section 
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.4, once: true}}
    className={zenProjectStyle.mesto__project__project__bg}>
        <div className={zenProjectStyle.mesto__project__project__block}>
          <motion.h3 custom={2} variants={textAnimationZen} className={zenProjectStyle.mesto__project__project__title}>Project Zen</motion.h3>
          <motion.p custom={3} variants={textAnimationZen}  className={zenProjectStyle.mesto__project__project__text}>Zen - company that sells real estate in Turkey.
          The project is written in conjunction with Gulp, HTML, SCSS and JavaScript - Front-End
          </motion.p>
          <motion.button custom={4} variants={textAnimationZen} className={zenProjectStyle.mesto__project__project__button}>
            <NavLink className={zenProjectStyle.mesto__project__project__navlink} to="/mesto">Learn More</NavLink>
          </motion.button>
      </div>
    </motion.section>
  );
}
 
export default MestoProject;