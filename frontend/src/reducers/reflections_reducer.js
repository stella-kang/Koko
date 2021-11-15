import {
  RECEIVE_REFLECTIONS,
  RECEIVE_REFLECTION
 } from '../actions/reflections_actions';

const ReflectionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REFLECTIONS:
      return action.reflections;
    case RECEIVE_REFLECTION:
      return Object.assign({}, state, { [action.reflection.id]: action.reflection })
    default:
      return state;
  }
};

export default ReflectionReducer
