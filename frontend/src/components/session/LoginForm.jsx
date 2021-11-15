import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

export const LoginForm = ({ login }) => {

  const { register, formState: { errors }, handleSubmit } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false
  });

  const onSubmit = (data) => {
    const user = {
      email: data.email,
      password: data.password
    };
    console.log(user);
    // login(user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input type="text"
              {...register("email")}
              placeholder="Email"
            />
          <br/>
            <input type="password"
              {...register("password")}
              placeholder="Password"
            />
          <br/>
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
