import { RECEIVE_DAY_SHOW, CLEAR_DAY_SHOW } from "../actions/day_show_actions";

const dayShowReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DAY_SHOW:
      return action.dayShow;
    case CLEAR_DAY_SHOW:
      return {};
    default:
      return state;
  }
}

export default dayShowReducer;
