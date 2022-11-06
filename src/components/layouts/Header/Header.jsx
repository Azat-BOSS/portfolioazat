import { NavLink } from "react-router-dom";
import headerStyle from "./header.module.css"
import Logo from "../../../images/icons/logo.svg"
import GithubIcon from "../../../images/icons/github.svg"

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.header__wrapper_up}>
        <h4 className={headerStyle.header__wrapper__title}>portfolio front-end engineer`s</h4>
      </div>
      <div className={headerStyle.header__wrapper_down}>
        <button className={headerStyle.header__btn}>
          <span className={headerStyle.header__btn__element}></span>
          <span className={headerStyle.header__btn__element}></span>
          <span className={headerStyle.header__btn__element}></span>
        </button>
        <img src={Logo} alt="logo" className={headerStyle.header__logo}/>
        <a href="https://github.com/Azat-BOSS">
          <img src={GithubIcon} alt="icon" className={headerStyle.header__icon}/>
        </a>
      </div>
    </header>
  );
};

export default Header;