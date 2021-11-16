import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import goals from './goal_errors_reducer'

const ErrorsReducer = combineReducers({
  session,
  goals
});

export default ErrorsReducer
