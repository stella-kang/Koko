import { combineReducers } from "redux";
import moods from './moods_reducer';
import reflections from './reflections_reducer';
import goals from './goals_reducer';
import history from "./history_reducer"

const entitiesReducer = combineReducers({
  moods,
  reflections,
  goals,
  history
})

export default entitiesReducer;
