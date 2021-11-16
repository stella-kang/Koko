import { combineReducers } from "redux";
import moods from './moods_reducer';
import reflections from './reflections_reducer';
import goals from './goals_reducer';
import dayShow from "./day_show_reducer"

const entitiesReducer = combineReducers({
  moods,
  reflections,
  goals,
  dayShow
})

export default entitiesReducer;
