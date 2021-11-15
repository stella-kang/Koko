import { combineReducers } from "redux";
import mood from './mood_reducer'

const entitiesReducer = combineReducers({
  mood
})

export default entitiesReducer;
