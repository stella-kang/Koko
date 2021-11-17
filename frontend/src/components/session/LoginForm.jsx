import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = {
  login,
  clearSessionErrors
}

export const LoginForm = ({ postLogin, errors, login, clearSessionErrors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return () => clearSessionErrors();
  }, [clearSessionErrors])

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    login(user)
      .then((action) => {
        if (action.type ==="RECEIVE_CURRENT_USER" && postLogin) postLogin();
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="email">Email {errors.email}</label>
          <input type="text" id="email" spellCheck="false"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="password">Password {errors.password}</label>
          <input type="password" id="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
        </div>

        <button>Login</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
