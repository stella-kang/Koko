import axios from 'axios';

export const fetchReflections = ({ userId }) => {
  return axios.get(`/api/reflections/users/${userId}`)
};
