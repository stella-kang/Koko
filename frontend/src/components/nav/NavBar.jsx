import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = {
  openModal
};

export const NavBar = ({ loggedIn, openModal, location, history }) => {

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="signup-login-container">
          <button onClick={() => openModal({
            type: "logout"
          })}>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="signup-login-container">
          { (location.pathname === "/register" || location.pathname === "/login") ?
            (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
            ) : (
            <>
              <button onClick={() => openModal({
                type: "login"
              })}>
                Login
              </button>
              <button onClick={() => openModal({
                type: "register"
              })}>
                Register
              </button>
            </>
            )
          }
        </div>
      );
    }
  };

  const clickLogo = () => {
    if (loggedIn) {
      if (location.pathname !== '/home') history.push('/home');
    } else {
      if (location.pathname !== '/') history.push('/');
    }
  }

  return (
    <header className={`${location.pathname.includes("day" || "home") ? null : 'splash-nav'}`}>
      <h1 id="logo" onClick={clickLogo}>KOKO</h1>
      <nav>{ getLinks() }</nav>
    </header>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
