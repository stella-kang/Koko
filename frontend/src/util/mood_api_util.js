import axios from 'axios';

export const fetchMoods = (userId) => {
  return axios.get(`/api/moods/users/${userId}`);
};

export const createMood = (mood) => {
  return axios.post(`/api/moods`, mood);
};

export const updateMood = (mood) => {
  return axios.patch(`/api/moods/${mood.id}`, mood);
};
