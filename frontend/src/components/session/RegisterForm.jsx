import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

export const RegisterForm = ({ errors, signup }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      username,
      password,
      password2
    };
    console.log(user);
    // signup(user);
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
          <label htmlFor="username">Username {errors.username}</label>
          <input type="text" id="username" spellCheck="false"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="Username"
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

        <div>
          <label htmlFor="password2">Confirm Password {errors.password2}</label>
          <input type="password" id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.currentTarget.value)}
            placeholder="Confirm Password"
            />
        </div>

        <button>Register</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = {
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
