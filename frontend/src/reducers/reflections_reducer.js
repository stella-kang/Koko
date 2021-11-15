import {
  RECEIVE_REFLECTIONS,
  RECEIVE_REFLECTION
 } from '../actions/reflections_actions';

const ReflectionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REFLECTIONS:
      return action.reflections.data;
    case RECEIVE_REFLECTION:
      return Object.assign({}, state, { [action.reflection.data.id]: action.reflection.data })
    default:
      return state;
  }
};

export default ReflectionReducer
