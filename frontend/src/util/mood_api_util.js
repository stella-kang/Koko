import axios from 'axios';

export const createMood = (mood) => {
  return axios.post(`/api/moods/users/${mood.user_id}`, mood)
}

export const editMood = (mood) => {
  return axios.patch(`/api/moods/${mood.id}`, mood)
}

export const fetchMood = (userId) => {
  return axios.get(`/api/moods/user/${userId}`)
}
