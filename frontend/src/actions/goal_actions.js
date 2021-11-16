import * as GoalAPIUtil from '../util/goal_api_util';

export const RECEIVE_GOALS = 'RECEIVE_GOALS';
export const RECEIVE_GOAL = 'RECEIVE_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

export const receiveGoals = (goals) => ({
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

export const requestGoals = userId => dispatch => (
  GoalAPIUtil.fetchGoals(userId)
    .then(payload => dispatch(receiveGoals(payload.data)))
    .catch(err => console.log(err))
);

export const createGoal = (goal) => dispatch => (
  GoalAPIUtil.createGoal(goal)
    .then(payload => dispatch(receiveGoal(payload.data)))
    .catch(err => console.log(err))
);

export const updateGoal = (goal) => dispatch => (
  GoalAPIUtil.updateGoal(goal)
    .then(payload => dispatch(receiveGoal(payload.data)))
    .catch(err => console.log(err))
);

export const deleteGoal = (goalId) => dispatch => (
  GoalAPIUtil.deleteGoal(goalId)
    .then(() => dispatch(removeGoal(goalId)))
);
