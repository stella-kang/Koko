import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const ModalReducer = (state = { action: "close" }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, action.modal, { action: "open" });
    case CLOSE_MODAL:
      return Object.assign({}, action.modal, { action: "close" });
    default:
      return state;
  }
};

export default ModalReducer
