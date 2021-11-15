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
      return action.goals;
    case RECEIVE_GOAL:
      newState[action.goal.id] = action.goal;
      return newState;
    case REMOVE_GOAL:
      delete newState[action.goalId];
      return newState;
    default:
      return oldState;
  }
};

export default GoalsReducer;
