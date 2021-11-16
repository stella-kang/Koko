import * as MoodApiUtil from "../util/mood_api_util"

export const RECEIVE_MOODS = "RECEIVE_MOODS"
export const RECEIVE_MOOD = "RECEIVE_MOOD"
export const CLEAR_MOOD = "CLEAR_MOOD"

const receiveMoods = (moods) => ({
  type: RECEIVE_MOODS,
  moods
});

const receiveMood = (mood) => ({
  type: RECEIVE_MOOD,
  mood
});

const clearMood = () => ({
  type: CLEAR_MOOD
});

export const fetchMoods = userId => dispatch => (
  MoodApiUtil.fetchMoods(userId)
    .then(payload => dispatch(receiveMoods(payload.data)))
    .catch(err => console.log(err))
)

export const createMood = mood => dispatch => (
  MoodApiUtil.createMood(mood)
    .then(mood => dispatch(receiveMood(mood)))
    .catch(err => console.log(err))
)

export const updateMood = mood => dispatch => (
  MoodApiUtil.updateMood(mood)
    .then((mood) => dispatch(receiveMood(mood)))
    .catch(err => console.log(err))
)

