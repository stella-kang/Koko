import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = {
  signup,
  clearSessionErrors
}

export const RegisterFormModal = ({
  postRegister,
  errors,
  signup,
  clearSessionErrors,
}) => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    return () => clearSessionErrors();
  }, [clearSessionErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      username,
      password,
      password2,
    };
    signup(user)
      .then((action) => {
        if (action.type ==="RECEIVE_CURRENT_USER" && postRegister) postRegister();
      })
  }

  return (
    <div className='main-login-form-container'>
      <form onSubmit={handleSubmit}>
        <h3>Meet Koko Today!</h3>
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
            <label htmlFor='username'>Username</label>
            <div className='registration-errors'>
              {errors.username && <span>{errors.username}</span>}
            </div>
            <div className='input-box-container'>
              <input
                type='text'
                id='username'
                spellCheck='false'
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                placeholder='Username'
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

          <div className='login-content-item'>
            <label htmlFor='password2'>Confirm Password</label>
            <div className='registration-errors'>
              {errors.password2 && <span>{errors.password2}</span>}
            </div>
            <div className='input-box-container'>
              <input
                type='password'
                id='password2'
                value={password2}
                onChange={(e) => setPassword2(e.currentTarget.value)}
                placeholder='Confirm Password'
              />
            </div>
          </div>
        </div>
        <button className='login-btn'>Register</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormModal);
