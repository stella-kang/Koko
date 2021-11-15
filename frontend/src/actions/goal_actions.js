import * as GoalAPIUtil from '../util/goal_api_util';

export const RECEIVE_GOALS = 'RECEIVE_GOALS';
export const RECEIVE_GOAL = 'RECEIVE_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

const receiveGoals = (goals) => ({
  type: RECEIVE_GOALS,
  goals,
});

const receiveGoal = (goal) => ({
  type: RECEIVE_GOAL,
  goal,
});

const removeGoal = (goalId) => ({
  type: REMOVE_GOAL,
  goalId,
});

export const requestGoals = () => (dispatch) => {
  return GoalAPIUtil.fetchGoals().then((goals) =>
    dispatch(receiveGoals(goals))
  );
};

export const requestGoal = (goalId) => (dispatch) => {
  return GoalAPIUtil.fetchGoal(goalId).then((goal) =>
    dispatch(receiveGoal(goal))
  );
};

export const createGoal = (goal) => (dispatch) => {
  return GoalAPIUtil.createGoal(goal).then((createdGoal) =>
    dispatch(receiveGoal(createdGoal))
  );
};

export const updateGoal = (goal) => (dispatch) => {
  return GoalAPIUtil.updateGoal(goal).then((updatedGoal) =>
    dispatch(receiveGoal(updatedGoal))
  );
};

export const deleteGoal = (goalId) => (dispatch) => {
  return GoalAPIUtil.deleteGoal(goalId).then(() =>
    dispatch(removeGoal(goalId))
  );
};
