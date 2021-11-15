import axios from 'axios';

export const fetchGoals = () => {
  return axios.get('/api/goals');
};

export const fetchGoal = (goalId) => {
  return axios.get(`/api/goals/${goalId}`)
}

export const createGoal = (goal) => {
  return axios.post('/api/goals', goal);
};

export const updateGoal = (goal) => {
  return axios.patch(`/api/goals/${goal.id}`)
}

export const deleteGoal = (goalId) => {
  return axios.delete(`/api/goals/${goalId}`)
}