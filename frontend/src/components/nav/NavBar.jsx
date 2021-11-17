import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
  openModal
};

export const NavBar = ({ loggedIn, logout, openModal }) => {
  const logoutUser = () => {
    logout();
  };

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="signup-login-container">
          {/* <Link to={'/register'}>Register</Link> */}
          <button onClick={() => openModal({
            type: "register"
          })}>
            Register
          </button>
          <button onClick={() => openModal({
            type: "login"
          })}>
            Login
          </button>
        </div>
      );
    }
  };

  return (
    <header>
      <h1 id="logo">KOKO</h1>
      <nav>{getLinks()}</nav>
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
