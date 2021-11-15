import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateGoal, requestGoal } from '../../actions/goal_actions';

const EditGoalForm = ({ username, goal, errors, updateGoal, requestGoal }) => {
  const [enteredTextGoal, setEnteredTextGoal] = useState('');
  const [enteredDateGoal, setEnteredDateGoal] = useState('');

  useEffect(() => {
    requestGoal(goal.id);
  }, [requestGoal]);

  const goalTextInputHandler = (e) => {
    setEnteredTextGoal(e.target.value);
  };

  const goalDateInputHandler = (e) => {
    setEnteredDateGoal(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    updateGoal({
      goal: enteredTextGoal,
      date: enteredDateGoal,
    });
  };

  if (!goal) return null;
  return (
    <div>
      <h1>Edit this goal</h1>
      <form onSubmit={formSubmitHandler}>
        <label>
          Current Goal
          <input type='text' onChange={goalTextInputHandler} />
        </label>
        <label>
          When do you envision to complete it?
          <input type='date' onChange={goalDateInputHandler} />
        </label>
        <button>Edit Goal</button>
      </form>
    </div>
  );
};

const mSTP = (state) => {
  return {
    errors: state.errors.goals,
    username: state.session.username,
    goal: state.entities.goal,
  };
};

const mDTP = (dispatch) => ({
  editGoal: (goal) => dispatch(updateGoal(goal)),
  requestGoal: (goalId) => dispatch(requestGoal(goalId)),
});

export default connect(mSTP, mDTP)(EditGoalForm);
