import {
  RECEIVE_GOALS,
  RECEIVE_GOAL,
  REMOVE_GOAL,
} from '../actions/goal_actions';

const GoalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState };

  switch (action.type) {
    case RECEIVE_GOALS:
      for (let goal of action.goals) {
        newState[goal._id] = goal;
      }
      return newState;
    case RECEIVE_GOAL:
      newState[action.goal._id] = action.goal;
      return newState;
    case REMOVE_GOAL:
      delete newState[action.goalId];
      return newState;
    default:
      return oldState;
  }
};

export default GoalsReducer;
