import axios from 'axios';

export const fetchGoals = (userId) => {
  return axios.get(`/api/goals/users/${userId}`);
};

export const createGoal = (goal) => {
  return axios.post('/api/goals', goal);
};

export const updateGoal = (goal) => {
  return axios.patch(`/api/goals/${goal.id}`, goal);
};

export const deleteGoal = (goalId) => {
  return axios.delete(`/api/goals/${goalId}`);
};
