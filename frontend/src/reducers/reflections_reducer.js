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
      for (let reflection of action.reflections) {
        newState[reflection._id] = reflection;
      }
      return newState;
    case RECEIVE_REFLECTION:
      newState[action.reflection._id] = action.reflection;
      return newState;
    case REMOVE_REFLECTION:
      delete newState[action.reflectionId]
      return newState;
    default:
      return oldState;
  }
};

export default ReflectionReducer
