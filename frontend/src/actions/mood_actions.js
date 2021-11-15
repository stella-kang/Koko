export const RECEIVE_MOOD = "RECEIVE_MOOD"
export const CLEAR_MOOD = "CLEAR_MOOD"

export const receiveMood = (mood) => ({
  type: RECEIVE_MOOD,
  mood
})

export const clearMood = () => ({
  type: CLEAR_MOOD
})
