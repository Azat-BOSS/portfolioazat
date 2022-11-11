import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import modalStyle from "./modal.module.css"
import PropTypes from "prop-types"

import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal = ({children, modal, setModal}) => {

  useEffect(() => {
    const handleEsc = (evt) => {
      if(evt.key === "Escape") {
        setModal(false)
      }
    }
    document.addEventListener("keyup", handleEsc)
    return () => {
      document.removeEventListener("keyup", handleEsc)
    }
  }, [setModal])
  

  return ReactDOM.createPortal( 
    <div className={modalStyle.Modal}>
      <ModalOverlay overlay={modal} setOverlay={setModal}/>
      <div className={modal === true ? modalStyle.modal__container_active : modalStyle.modal__container}>
      {children}
      </div>
    </div>,
    
    document.getElementById("modal")
  );
}
 
ModalOverlay.propTypes = {
  children: PropTypes.node,
  modal: PropTypes.bool,
  setModal: PropTypes.func
}

export default Modal;