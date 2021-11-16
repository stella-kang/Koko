import axios from 'axios';

export const fetchHistory = (userId, date) => {
  return axios.get(`/api/users/${userId}/history/${date}`)
}
