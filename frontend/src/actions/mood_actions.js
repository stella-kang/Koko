import * as MoodApiUtil from "../util/mood_api_util"

export const RECEIVE_MOODS = "RECEIVE_MOODS"
export const RECEIVE_MOOD = "RECEIVE_MOOD"

const receiveMoods = (moods) => ({
  type: RECEIVE_MOODS,
  moods
});

const receiveMood = (mood) => ({
  type: RECEIVE_MOOD,
  mood
});

export const fetchMoods = userId => dispatch => (
  MoodApiUtil.fetchMoods(userId)
    .then(moods => dispatch(receiveMoods(moods)))
    .catch(err => console.log(err))
)

export const createMood = mood => dispatch => (
  MoodApiUtil.createMood(mood)
    .then((savedMood) => dispatch(receiveMood(savedMood)))
    .catch(err => console.log(err))
)

export const updateMood = mood => dispatch => (
  MoodApiUtil.updateMood(mood)
    .then((newMood) => dispatch(receiveMood(newMood)))
    .catch(err => console.log(err))
)

