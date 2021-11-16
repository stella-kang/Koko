import {
  RECEIVE_REFLECTIONS,
  RECEIVE_REFLECTION,
  REMOVE_REFLECTION
} from '../actions/reflections_actions';

const ReflectionReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = { ...oldState }

  switch (action.type) {
    case RECEIVE_REFLECTIONS:
      return action.reflections.data;
    case RECEIVE_REFLECTION:
      return Object.assign({}, oldState, { [action.reflection.data.id]: action.reflection.data })
    case REMOVE_REFLECTION:
      delete newState[action.goalId]
      return newState;
    default:
      return oldState;
  }
};

export default ReflectionReducer
