import { RECEIVE_MOOD, CLEAR_MOOD } from "../actions/mood_actions";

const _defaultMood = null;

const MoodsReducer = (state = _defaultMood, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MOOD:
      return action.mood;
    case CLEAR_MOOD:
      return null;
    default:
      return state;
  }
}

export default MoodsReducer;
