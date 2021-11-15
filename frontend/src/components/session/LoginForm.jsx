import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

export const LoginForm = ({ login }) => {


  return (
    <div>

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
