import React from "react";
import projitoProjectStyles from "./projitoproject.module.css"

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ProjitoProject = ({textAnimationProjito}) => {
  return ( 
    <motion.section 
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.4, once: true}}
    className={projitoProjectStyles.projito__project__bg}>
        <div className={projitoProjectStyles.projito__project__block}>
          <motion.h3 custom={2} variants={textAnimationProjito} className={projitoProjectStyles.projito__project__title}>Project Zen</motion.h3>
          <motion.p custom={3} variants={textAnimationProjito}  className={projitoProjectStyles.projito__project__text}>Zen - company that sells real estate in Turkey.
          The project is written in conjunction with Gulp, HTML, SCSS and JavaScript - Front-End
          </motion.p>
          <motion.button custom={4} variants={textAnimationProjito} className={projitoProjectStyles.projito__project__button}>
            <NavLink className={projitoProjectStyles.projito__project__navlink} to="/projito">Learn More</NavLink>
          </motion.button>
      </div>
    </motion.section>
  );
}
 
export default ProjitoProject;