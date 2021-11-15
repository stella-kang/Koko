import * as MoodApiUtil from "../util/mood_api_util"

export const RECEIVE_MOOD = "RECEIVE_MOOD"
export const CLEAR_MOOD = "CLEAR_MOOD"

const receiveMood = (mood) => ({
  type: RECEIVE_MOOD,
  mood
})

export const clearMood = () => ({
  type: CLEAR_MOOD
})

export const createMood = mood => dispatch => (
  MoodApiUtil.createMood(mood)
    .then((savedMood) => dispatch(receiveMood(savedMood)))
)

export const editMood = mood => dispatch => (
  MoodApiUtil.editMood(mood)
    .then((newMood) => dispatch(receiveMood(newMood)))
)

export const fetchMood = userId => dispatch => (
  MoodApiUtil.fetchMood(userId)
    .then(mood => dispatch(receiveMood(mood)))
)
