import React, { useEffect, useState } from "react";
import projitoStyle from "./projito.module.css"
import { AnimatePresence, motion } from "framer-motion";
import { item, container } from "../../../../animations/animation";

import projito from "../../../../images/projito.webp";
import projitoImg from "../../../../images/projitoImg.webp";
import projitoMaterial from "../../../../images/projitoMaterial.webp";
import projitoNew from "../../../../images/projitoNew.webp";

const Projito = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loading
      ? document.body.classList.add("loading")
      : document.body.classList.remove("loading")
  })

  return ( 
    <AnimatePresence className={projitoStyle.projito}>
      {loading ? (
        <motion.div key="projito__loader">
          <ProjitoLoader setLoading={setLoading}/>
        </motion.div>
      ) : (
        <>
          <ProjitoMain></ProjitoMain>
        </>
      )}
    </AnimatePresence>
  );
}

export const ProjitoLoader = ({setLoading}) => {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop()
  }, [setLoading])

  return (
    <div className="projito__loader">
    <motion.div className={projitoStyle.projito__loader__container}
    variants={container}
    initial="hidden"
    animate="show"
    exit="exit"
    onAnimationComplete={() => setLoading(false)}
    >
      <motion.div className="projito__image__zone__block">
        <motion.img variants={item} src={projitoImg} alt="zone" className={projitoStyle.projito__image__zone}/>
      </motion.div>
      <div className={projitoStyle.projito__transition_image}>
        <motion.img variants={item} src={projito} alt="projito" className={projitoStyle.projito__image_main}/>
      </div>
      <motion.div className="projito__image__block">
        <motion.img variants={item} src={projitoMaterial} alt="projects" className={projitoStyle.projito__image__projects}/>
        <motion.img variants={item} src={projitoNew} alt="stages" className={projitoStyle.projito__image__stages}/>
      </motion.div>
    </motion.div>
  </div>
  )
}

export const ProjitoMain = () => {

  const textAnimationProjito = {
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
    <motion.div className={projitoStyle.projitoMain}
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.4, once: true}}
    >
      <motion.h2 custom={2}  variants={textAnimationProjito} className={projitoStyle.projitoMain__title}>Zen Real Estate</motion.h2>
      <motion.h4 custom={3}  variants={textAnimationProjito} className={projitoStyle.projitoMain__upperTitle}>Company Zen - Zen that sells apartments, townhouses.</motion.h4>
      <motion.img custom={4} variants={textAnimationProjito} src={projito} alt="zen" className={projitoStyle.projitoMain__image__round}/>
      <motion.p custom={5} variants={textAnimationProjito} className={projitoStyle.projitoMain__text}>The main technologies used were HTML, CSS, JS object-oriented paradigm, and a galp builder that created common files.
        In the use of the backend used PHP language and CMS Bitrix. Connected to TimeWeb hosting via FTP, destination IP and built-in PHPStorm editor.
        Sending mail was done through the CMS, with built-in features. </motion.p>
      <motion.a custom={6} variants={textAnimationProjito} className={projitoStyle.projitoMain__link} href="https://plus-zenturkey.ru/" target="_blank" rel="noreferrer">Check this Site</motion.a>
    </motion.div>
  )
}
 
export default Projito;