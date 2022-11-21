import React from "react";
import { useDispatch, useSelector } from "react-redux";
import modalContactStyle from "./modalcontact.module.css"

import vaultBoy from "../../images/icons/vaultBoy.svg"

const ModalContact = () => {
  const dispatch = useDispatch()
  const selector = useSelector(store => store.isOpen)
  
  const closeModal = () => {
    dispatch({type: "MODAL_ACTION"})
  }
  
  return ( 
    <div className={selector === false ? modalContactStyle.modalContact : modalContactStyle.modalContact_active}>
      <div onClick={() => closeModal()} className={modalContactStyle.modalContact__overlay}></div>
        <form action="#" className={modalContactStyle.modalContact__form}>
        <button onClick={() => closeModal()} className={modalContactStyle.modalContact__block__close__button} type="button">
          <img src={vaultBoy} alt="closeIcon" className={modalContactStyle.modalContact__block__close}/>
        </button>
          <h4 className={modalContactStyle.modalContact__form__title}>Contact</h4>
          <p className={modalContactStyle.modalContact__form__text}>Please fill out the details</p>
          <fieldset className={modalContactStyle.modalContact__form__inputs}>
            <input type="name" className={modalContactStyle.modalContact__form__input_name} placeholder="Name"/>
            <input type="email" className={modalContactStyle.modalContact__form__input_email} placeholder="Email"/>
            <input type="phone" className={modalContactStyle.modalContact__form__input_phone} placeholder="Phone"/>
          </fieldset>
          <button className={modalContactStyle.modalContact__form__button}>Submit</button>
        </form>
    </div>
  );
}
 
export default ModalContact;