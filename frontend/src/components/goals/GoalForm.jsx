import React from 'react';
import { useForm } from 'react-hook-form';

const GoalForm = ({ currentUser, processForm, closeForm, goal }) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: { description: goal ? goal.description : '' },
  });

  const onSubmit = (data) => {
    const formGoal = {
      description: data.description,
      date: data.date,
      userId: currentUser.id
    };
    if (goal) goal['id'] = goal._id;

    processForm(formGoal).then(action => {
      if (action.type ==="RECEIVE_GOAL") closeForm();
    })
  };

  return (
    <div>
      <button onClick={() => closeForm()}>Cancel</button>
      <h1>Hello, {currentUser.username}, do you have any goals to tell Koko?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Current Goal { errors.description?.message }
          <input type='text' spellCheck='false'
          {...register('description', {
            required: 'Goal description is required',
            minLength: {
              value: 3,
              message: "Description must be at least 3 characters"
            },
            maxLength: {
              value: 100,
              message: "Description must be at most 100 characters"
            }
          })}
        />
        </label>
        <label>
          When do you envision to complete it?
          <input type='date'
            {...register('date')}
          />
        </label>
        <button>{ goal ? "Update" : "Add"} Goal</button>
      </form>
    </div>
  );
};

export default GoalForm
