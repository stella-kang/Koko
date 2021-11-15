import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';
import Root from './components/Root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

// document.addEventListener('DOMContentLoaded', () => {

//   ReactDOM.render(<App />, document.getElementById('root'));
// })

let store;

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decodedUser = jwt_decode(localStorage.jwtToken);

  const preloadedState = { session: { isAuthenticated: true, user: decodedUser }};

  store = configureStore(preloadedState);

  const currentTime = Date.now() / 1000;

  if (decodedUser.exp < currentTime) {
    store.dispatch(logout());
    window.location.hreef ='/login';
  }
} else {
  store = configureStore({});
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
