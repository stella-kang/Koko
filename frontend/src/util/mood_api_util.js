import axios from 'axios';

export const createMood = (mood) => {
  return axios.post(`/api/moods/users/${mood.user_id}`, mood)
}

export const editMood = (mood) => {

}
