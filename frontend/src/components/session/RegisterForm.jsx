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
          <input type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
          />
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="Username"
          />
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
          <input type="password"
            value={password2}
            onChange={(e) => setPassword2(e.currentTarget.value)}
            placeholder="Confirm Password"
          />
          <button>Register</button>
        </div>
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
