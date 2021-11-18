import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = {
  login,
  clearSessionErrors,
};

export const LoginForm = ({ postLogin, errors, login, clearSessionErrors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return () => clearSessionErrors();
  }, [clearSessionErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    login(user).then((action) => {
      if (action.type === 'RECEIVE_CURRENT_USER' && postLogin) postLogin();
    });
  };

  const handleDemo = () => {

  }

  return (
    <div className='main-login-form-container'>
      <form onSubmit={handleSubmit}>
        <h3>Welcome Back</h3>
        <div className='login-content'>
          <div className='login-content-item'>
            <label htmlFor='email'>Email</label>
            <div className='registration-errors'>
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className='input-box-container'>
              <input
                type='text'
                id='email'
                spellCheck='false'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder='Email'
              />
            </div>
          </div>

          <div className='login-content-item'>
            <label htmlFor='password'>Password</label>
            <div className='registration-errors'>
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className='input-box-container'>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder='Password'
              />
            </div>
          </div>
        </div>

        <button className='login-btn'>Login</button>
        <div className="demo-button" onClick={handleDemo}>Login as demo user</div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
