import React, { useEffect, useState } from "react";
import mestoStyle from "./mesto.module.css"
import { AnimatePresence, motion } from "framer-motion";
import { item, container } from "../../../../animations/animation";

import mestoImage from "../../../../images/MestoImage.webp"
import mestoProject from "../../../../images/mestoProject.webp"
import mestoPopup from "../../../../images/MestoPopup.webp"
import mestoPhoneEdition from "../../../../images/MestoPhoneEdition.webp"

const Mesto = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loading
      ? document.body.classList.add("loading")
      : document.body.classList.remove("loading")
  })

  return ( 
    <AnimatePresence className={mestoStyle.mesto}>
      {loading ? (
        <motion.div key="mesto__loader">
          <MestoLoader setLoading={setLoading}/>
        </motion.div>
      ) : (
        <>
          <MestoMain></MestoMain>
        </>
      )}
    </AnimatePresence>
  );
}

export const MestoLoader = ({setLoading}) => {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop()
  }, [setLoading])

  return (
    <div className="mesto__loader">
    <motion.div className={mestoStyle.mesto__loader__container}
    variants={container}
    initial="hidden"
    animate="show"
    exit="exit"
    onAnimationComplete={() => setLoading(false)}
    >
      <motion.div className="mesto__image__zone__block">
        <motion.img variants={item} src={mestoProject} alt="zone" className={mestoStyle.mesto__image__zone}/>
      </motion.div>
      <div className={mestoStyle.mesto__transition_image}>
        <motion.img variants={item} src={mestoImage} alt="mesto" className={mestoStyle.mesto__image_main}/>
      </div>
      <motion.div className="mesto__image__block">
        <motion.img variants={item} src={mestoPhoneEdition} alt="projects" className={mestoStyle.mesto__image__projects}/>
        <motion.img variants={item} src={mestoPopup} alt="stages" className={mestoStyle.mesto__image__stages}/>
      </motion.div>
    </motion.div>
  </div>
  )
}

export const MestoMain = () => {

  const textAnimationMesto = {
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
    <motion.div className={mestoStyle.mestoMain}
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.4, once: true}}
    >
      <motion.h2 custom={2} variants={textAnimationMesto} className={mestoStyle.mestoMain__title}>Zen Real Estate</motion.h2>
      <motion.h4 custom={3} variants={textAnimationMesto} className={mestoStyle.mestoMain__upperTitle}>Company Zen - Zen that sells apartments, townhouses.</motion.h4>
      <motion.img custom={4} variants={textAnimationMesto} src={mestoProject} alt="zen" className={mestoStyle.mestoMain__image__round}/>
      <motion.p custom={5} variants={textAnimationMesto} className={mestoStyle.mestoMain__text}>The main technologies used were HTML, CSS, JS object-oriented paradigm, and a galp builder that created common files.
        In the use of the backend used PHP language and CMS Bitrix. Connected to TimeWeb hosting via FTP, destination IP and built-in PHPStorm editor.
        Sending mail was done through the CMS, with built-in features. </motion.p>
      <motion.a custom={6} variants={textAnimationMesto} className={mestoStyle.mestoMain__link} href="https://plus-zenturkey.ru/" target="_blank" rel="noreferrer">Check this Site</motion.a>
    </motion.div>
  )
}
 
export default Mesto;