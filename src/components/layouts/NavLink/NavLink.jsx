import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { MODAL_ACTION_HOME } from "../../../services/action";
import navlinkStyle from "./navlink.module.css"

const Navlink = ({link, setLink}) => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch({type: MODAL_ACTION_HOME})
  }

  const actionLink = () => setLink(false)

  return (
    <ul className={link === true ? navlinkStyle.navlink__block_active : navlinkStyle.navlink__block}>
      <NavLink className={navlinkStyle.navlink} onClick={() => actionLink()} to="/">Home</NavLink>
      <NavLink className={navlinkStyle.navlink} onClick={() => actionLink()} to="/about">About</NavLink>
      <NavLink to="/">
        <button className={navlinkStyle.navlink} onClick={() => {actionLink(); openModal()}}>Contact me</button>
      </NavLink>
    </ul>
  );
};

export default Navlink;
