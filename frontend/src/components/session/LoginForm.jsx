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
          <input type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
          />
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
          <button>Login</button>
        </div>
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
