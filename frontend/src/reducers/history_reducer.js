import { RECEIVE_HISTORY, CLEAR_HISTORY } from "../actions/history_actions";

const historyReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_HISTORY:
      return action.history;
    case CLEAR_HISTORY:
      return {};
    default:
      return state;
  }
}

export default historyReducer;
