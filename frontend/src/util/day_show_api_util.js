import axios from 'axios';

export const fetchDayShow = (userId, date) => {
  return axios.get(`/api/users/${userId}/history/${date}`)
}
