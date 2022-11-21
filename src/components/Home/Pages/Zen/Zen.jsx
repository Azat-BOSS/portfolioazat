import React, { useEffect, useState } from "react";
import zenStyle from "./zen.module.css"
import { AnimatePresence, motion } from "framer-motion";
import { item, container } from "../../../../animations/animation";

import zone from "../../../../images/zone.webp"
import stages from "../../../../images/stages.webp"
import projects from "../../../../images/projects.webp"
import zen from "../../../../images/zen.webp"

const Zen = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loading
      ? document.body.classList.add("loading")
      : document.body.classList.remove("loading")
    })

  return ( 
    <AnimatePresence className={zenStyle.zen}>
      {loading ? (
        <motion.div key="zen__loader">
          <ZenLoader setLoading={setLoading}/>
        </motion.div>
      ) : (
        <>
          <ZenMain></ZenMain>
        </>
      )}
    </AnimatePresence>
  );
}

export const ZenLoader = ({setLoading}) => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop()
  }, [setLoading])

  return (
    <div className="zen__loader">
    <motion.div className={zenStyle.zen__loader__container}
    variants={container}
    initial="hidden"
    animate="show"
    exit="exit"
    onAnimationComplete={() => setLoading(false)}
    >
      <motion.div className="zen__image__zone__block">
        <motion.img variants={item} src={zone} alt="zone" className={zenStyle.zen__image__zone}/>
      </motion.div>
      <div className={zenStyle.zen__transition_image}>
        <motion.img variants={item} src={zen} alt="zen" className={zenStyle.zen__image_main}/>
      </div>
      <motion.div className="zen__image__block">
        <motion.img variants={item} src={projects} alt="projects" className={zenStyle.zen__image__projects}/>
        <motion.img variants={item} src={stages} alt="stages" className={zenStyle.zen__image__stages}/>
      </motion.div>
    </motion.div>
  </div>
  )
}

export const ZenMain = () => {

  const textAnimationZen = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: custom * 0.6,
        type: "spring",
      },
    }),
  };

  return (
    <motion.div className={zenStyle.zenMain}
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.4, once: true}}
    >
      <motion.h2 custom={2}  variants={textAnimationZen} className={zenStyle.zenMain__title}>Zen Real Estate</motion.h2>
      <motion.h4 custom={3}  variants={textAnimationZen} className={zenStyle.zenMain__upperTitle}>Company Zen - Zen that sells apartments, townhouses.</motion.h4>
      <motion.img custom={4} variants={textAnimationZen} src={zen} alt="zen" className={zenStyle.zenMain__image__round}/>
      <motion.p custom={5} variants={textAnimationZen} className={zenStyle.zenMain__text}>The main technologies used were HTML, CSS, JS object-oriented paradigm, and a galp builder that created common files.
        In the use of the backend used PHP language and CMS Bitrix. Connected to TimeWeb hosting via FTP, destination IP and built-in PHPStorm editor.
        Sending mail was done through the CMS, with built-in features. </motion.p>
      <motion.a custom={6} variants={textAnimationZen} className={zenStyle.zenMain__link} href="https://plus-zenturkey.ru/" target="_blank" rel="noreferrer">Check this Site</motion.a>
    </motion.div>
  )
}
 
export default Zen;