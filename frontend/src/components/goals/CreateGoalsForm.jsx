import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGoal } from '../../actions/goal_actions';

const Goals = ({ username, goals, errors, addGoal }) => {
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

    addGoal({
      goal: enteredTextGoal,
      date: enteredDateGoal,
    });
  };

  return (
    <div>
      <h1>Hello, {username}, do you have any goals to tell Koko?</h1>
      <form onSubmit={formSubmitHandler}>
        <label>
          Current Goal
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
    username: state.session.username,
    goals: state.entities.goals,
  };
};

const mDTP = (dispatch) => ({
  addGoal: (goal) => dispatch(createGoal(goal)),
});

export default connect(mSTP, mDTP)(Goals);
