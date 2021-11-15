import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

export const LoginForm = ({ errors, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    console.log(user);
    // login(user);
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

const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
