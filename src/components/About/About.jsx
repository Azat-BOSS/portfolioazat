import React, { useEffect } from "react";
import aboutStyle from "./about.module.css"
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";
import { textAnimationAbout } from "../../animations/animation";

import html from "../../images/icons/html.svg"
import css from "../../images/icons/css.svg"
import js from "../../images/icons/js.svg"
import react from "../../images/icons/react.svg"
import redux from "../../images/icons/redux.svg"
import node from "../../images/icons/nodejs.svg"
import php from "../../images/icons/php.svg"

import ModalContact from "../ModalContact/ModalContact";

const About = () => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch({type: "MODAL_ACTION"})
  }

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop()
  }, [])

  return ( 
    <motion.section className={aboutStyle.about}
    initial="hidden"
    animate="visible"
    viewport={{amount: 0.4, once: true}}
    >
      <ModalContact/>

      <div className={aboutStyle.about__block__intro}>
        <div className={aboutStyle.about__block__text}>
          <motion.h2 custom={2} variants={textAnimationAbout} className={aboutStyle.about__title}>Gainutdinov Azat</motion.h2>
          <motion.a custom={3} variants={textAnimationAbout} href="https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html" 
          className={aboutStyle.about__link} target="_blank" rel="noreferrer">Front-End Developer</motion.a>
            <motion.p custom={4} variants={textAnimationAbout} className={aboutStyle.about__text} target="_blank" rel="noreferrer">
              who tries to make all his wishes and dreams come true on the website
            </motion.p>
        </div>
        <motion.div custom={6} variants={textAnimationAbout} className={aboutStyle.about__bg__image}></motion.div>
      </div>

      <div className={aboutStyle.about__info}>
        <h4 className={aboutStyle.about__info__title}>About me</h4>
        <p className={aboutStyle.about__info__text}>
          Hi, dear, my name is Azat and i'm Front-end developer living in the 
          Turkey using modern web technologies. 
        </p>
        <div className={aboutStyle.about__skills}>
          <ul className={aboutStyle.about__icons}>
            <li className={aboutStyle.about__icons__list}>
              <img className={aboutStyle.about__icons__image} src={html} alt="Html" />
              <p className={aboutStyle.about__icons__text}>HTML</p>
            </li>
            <li className={aboutStyle.about__icons__list}>
              <img className={aboutStyle.about__icons__image} src={css} alt="Html" />
              <p className={aboutStyle.about__icons__text}>CSS</p>
            </li>
            <li className={aboutStyle.about__icons__list}>
              <img className={aboutStyle.about__icons__image} src={js} alt="Html" />
              <p className={aboutStyle.about__icons__text}>JavaScript</p>
            </li>
            <li className={aboutStyle.about__icons__list}>
              <img className={aboutStyle.about__icons__image} src={react} alt="Html" />
              <p className={aboutStyle.about__icons__text}>React</p>
            </li>
            <li className={aboutStyle.about__icons__list}>
              <img className={aboutStyle.about__icons__image} src={redux} alt="Html" />
              <p className={aboutStyle.about__icons__text}>Redux</p>
            </li>
            <li className={aboutStyle.about__icons__list}>
              <img className={aboutStyle.about__icons__image} src={node} alt="Html" />
              <p className={aboutStyle.about__icons__text}>NodeJS - basic</p>
            </li>
            <li className={aboutStyle.about__icons__list}>
              <img className={aboutStyle.about__icons__image} src={php} alt="Html" />
              <p className={aboutStyle.about__icons__text}>PHP - basic</p>
            </li>
          </ul>
        </div>
      </div> 

      <div className={aboutStyle.about__contact}>
        <h4 className={aboutStyle.about__contact__title}>If you want contact me</h4>
        <p className={aboutStyle.about__contact__text}>Don't worry, it's just a modal window</p>
        <button onClick={() => openModal()} className={aboutStyle.about__contact__button} type="submit">Click here</button>
      </div> 
    </motion.section>
   );
}
 
export default About;