import { combineReducers } from "redux";
import moods from './moods_reducer';
import reflections from './reflections_reducer';
import goals from './goals_reducer';

const entitiesReducer = combineReducers({
  moods,
  reflections,
  goals,
})

export default entitiesReducer;
