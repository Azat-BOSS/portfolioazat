import { MODAL_ACTION, MODAL_ACTION_HOME } from "./action.js"

const defaultModalPopup = {
  isOpen: false,
}

export const reducer = (state = defaultModalPopup, action) => {
  switch (action.type) {
    case MODAL_ACTION:
      return {
        ...state,
        isOpen: !state.isOpen
      }
      case MODAL_ACTION_HOME: {
        return {
          ...state,
          isOpen: !state.isOpen
        }
      }
    default:
      return state
  }
}


