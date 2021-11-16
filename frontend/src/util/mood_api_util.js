import axios from 'axios';

export const fetchMoods = (userId) => {
  return axios.get(`/api/moods/user/${userId}`);
};

export const createMood = (mood) => {
  return axios.post(`/api/moods/users/${mood.user_id}`, mood);
};

export const updateMood = (mood) => {
  return axios.patch(`/api/moods/${mood.id}`, mood);
};

