import React from "react";
import { NavLink } from "react-router-dom";

import navlinkStyle from "./navlink.module.css"

const Navlink = ({link, setLink}) => {
  const actionLink = () => setLink(false)

  return (
    <ul className={link === true ? navlinkStyle.navlink__block_active : navlinkStyle.navlink__block}>
      <NavLink className={navlinkStyle.navlink} onClick={() => actionLink()} to="/">Home</NavLink>
      <NavLink className={navlinkStyle.navlink} onClick={() => actionLink()} to="/blog">Blog</NavLink>
      <NavLink className={navlinkStyle.navlink} onClick={() => actionLink()} to="/about">About</NavLink>
    </ul>
  );
};

export default Navlink;
