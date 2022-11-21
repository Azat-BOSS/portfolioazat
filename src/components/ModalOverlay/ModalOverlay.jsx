import React from "react";
import overlayStyle from "./modalOverlay.module.css"

import ProptTypes from "prop-types"

const ModalOverlay = ({overlay, setOverlay}) => {
  return ( 
    <div className={overlay === true ? overlayStyle.modal__overlay_active : overlayStyle.modal__overlay}
    onClick={() => setOverlay(false)}>
    </div>
  );
}

ModalOverlay.ProptTypes = {
  overlay: ProptTypes.bool,
  setOverlay: ProptTypes.func.isRequired
}

 
export default ModalOverlay;