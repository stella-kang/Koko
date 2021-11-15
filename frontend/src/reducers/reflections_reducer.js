import { RECEIVE_REFLECTIONS } from '../actions/reflections_actions';

const ReflectionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REFLECTIONS:
      return action.reflections;
    default:
      return state;
  }
};

export default ReflectionsReducer
