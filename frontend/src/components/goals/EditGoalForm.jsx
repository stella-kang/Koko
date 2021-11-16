import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateGoal } from '../../actions/goal_actions';

const EditGoalForm = ({ currentUser, errors, updateGoal, closeForm, goal }) => {
  const [enteredTextGoal, setEnteredTextGoal] = useState('');
  const [enteredDateGoal, setEnteredDateGoal] = useState('');

  const goalTextInputHandler = (e) => {
    setEnteredTextGoal(e.target.value);
  };

  const goalDateInputHandler = (e) => {
    setEnteredDateGoal(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    updateGoal({
      description: enteredTextGoal,
      date: enteredDateGoal,
      userId: currentUser.id
    }).then(action => {
      if (action.type ==="RECEIVE_GOAL") closeForm();
    })
  };

  return (
    <div>
      <button onClick={() => closeForm()}>Cancel</button>
      <h1>Hello, {currentUser.username}, do you have any goals to tell Koko?</h1>
      <form onSubmit={formSubmitHandler}>
        <label>
          Current Goal { errors.description }
          <input type='text' onChange={goalTextInputHandler} />
        </label>
        <label>
          When do you envision to complete it?
          <input type='date' onChange={goalDateInputHandler} />
        </label>
        <button>Add Goal</button>
      </form>
    </div>
  );
};

const mSTP = (state) => {
  return {
    errors: state.errors.goals,
    currentUser: state.session.user,
  };
};

const mDTP = (dispatch) => ({
  updateGoal: (goal) => dispatch(updateGoal(goal)),
});

export default connect(mSTP, mDTP)(EditGoalForm);
