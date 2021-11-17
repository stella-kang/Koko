import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import modal from './modal_reducer';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const AppReducer = combineReducers({
  entities,
  session,
  errors,
  modal
});

const RootReducer = (state, action) => {
  if (action.type === RECEIVE_USER_LOGOUT) {
    return AppReducer({}, action);
  }
  return AppReducer(state, action);
}

export default RootReducer;
