import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

export const RegisterForm = ({ signup }) => {

  const { register, formState: { errors }, handleSubmit } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false
  });

  const onSubmit = (data) => {
    const user = {
      email: data.email,
      username: data.username,
      password: data.password,
      password2: data.password2
    };
    console.log(user);
    // signup(user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text"
            {...register("email")}
            placeholder="Email"
          />
          <input type="text"
            {...register("username")}
            placeholder="Username"
          />
          <input type="password"
            {...register("password")}
            placeholder="Password"
          />
          <input type="password"
            {...register("password2")}
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
