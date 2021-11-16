import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

export const NavBar = ({ loggedIn, logout }) => {

  const logoutUser = () => {
    logout();
  }

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={'/register'}>Register</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      )
    }
  }

  return (
    <div>
        <h1>Koko</h1>
        { getLinks() }
    </div>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated
})

const mapDispatchToProps = ({
  logout
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
