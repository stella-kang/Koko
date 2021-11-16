import { RECEIVE_MOODS, RECEIVE_MOOD, CLEAR_MOOD } from "../actions/mood_actions";

const _defaultMood = null;

const MoodsReducer = (oldState = _defaultMood, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_MOODS:
      return action.moods;
    case RECEIVE_MOOD:
      return Object.assign({}, oldState, { [action.mood.data.id]: action.mood.data })
    case CLEAR_MOOD:
      return null;
    default:
      return oldState;
  }
}

export default MoodsReducer;
