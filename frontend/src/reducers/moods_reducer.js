import { RECEIVE_MOODS, RECEIVE_MOOD, CLEAR_MOOD } from "../actions/mood_actions";

const MoodsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_MOODS:
      newState = { ...oldState }
      for (let mood of action.moods) {
        newState[mood._id] = mood
      }
      return newState;
    case RECEIVE_MOOD:
      return Object.assign({}, oldState, { [action.mood._id]: action.mood })
    case CLEAR_MOOD:
      return {};
    default:
      return oldState;
  }
}

export default MoodsReducer;
