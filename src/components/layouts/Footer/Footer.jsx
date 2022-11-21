import React from "react";
import footerStyle from "./footer.module.css"

import telegramIcon from "../../../images/icons/telegram.svg"
import githubIcon from "../../../images/icons/github.svg"

const Footer = () => {
  return ( 
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footer__block}>
        <div className={footerStyle.footer__block__icons}>
          <button className={footerStyle.footer__button}>
            <a href="/#"><img src={telegramIcon} alt="icon" className={footerStyle.footer__icon}/></a>
          </button>
          <button className={footerStyle.footer__button}>
            <a href="/#"><img src={githubIcon} alt="icon" className={footerStyle.footer__icon}/></a>
          </button>
        </div>
        <p className={footerStyle.footer__text}>© Azat Gainutdinov</p>
      </div>
    </footer>
   );
}
 
export default Footer;