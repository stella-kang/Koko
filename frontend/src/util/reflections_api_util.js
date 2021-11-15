import axios from 'axios';

export const fetchReflections = userId => {
  return axios.get(`/api/reflections/users/${userId}`);
};

export const updateReflection = reflection => {
  return axios.patch(`/api/reflections/${reflection.id}`, reflection);
};

export const createReflection = reflection => {
  return axios.post(`/api/reflections`, reflection);
};
