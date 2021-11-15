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

export const createMood = mood => {
  MoodApiUtil.createMood(mood)
    .then((savedMood) => dispatch(receiveMood(savedMood)));
}

export const editMood = mood => {
}
