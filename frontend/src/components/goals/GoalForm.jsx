import React from 'react';
import { useForm } from 'react-hook-form';

const GoalForm = ({ currentUser, processForm, closeForm, goal, deleteGoal }) => {

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
      dueDate: data.date,
      userId: currentUser.id
    };
    if (goal) formGoal['id'] = goal._id;

    processForm(formGoal).then(action => {
      if (action.type ==="RECEIVE_GOAL") closeForm();
    })
  };

  const handleDelete = () => {
    deleteGoal(goal._id)
      .then(() => closeForm());
  }

  const headerPhrase = goal ? "it's okay to adjust your goals!" : "do you have any goals to tell Koko?"

  return (
    <div>
      <button onClick={() => closeForm()}>Cancel</button>
      <h1>Hello, {currentUser.username}, {headerPhrase}</h1>
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
        { goal ? <button type="button" onClick={handleDelete}>Delete</button> : null}
      </form>
    </div>
  );
};

export default GoalForm
