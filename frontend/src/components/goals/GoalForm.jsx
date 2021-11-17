import React from 'react';
import { useForm } from 'react-hook-form';
import { ImCancelCircle } from 'react-icons/im';

const GoalForm = ({ currentUser, processForm, closeForm, goal, openModal }) => {

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
    if (goal) formGoal['_id'] = goal._id;

    if (formGoal.dueDate) {
      const date = new Date(formGoal.dueDate);
      const timezoneOffset = date.getTimezoneOffset() * 60000;
      formGoal.dueDate = new Date(date.getTime() + timezoneOffset);
    }

    processForm(formGoal).then(action => {
      if (action.type ==="RECEIVE_GOAL") closeForm();
    })
  };

  const handleDelete = () => {
    // deleteGoal(goal._id)
    //   .then(() => closeForm());
    openModal({
      type: "deleteGoal",
      goal: goal,
      closeForm: closeForm
    })
  }

  const headerPhrase = goal ? "it's okay to adjust your goals!" : "Do you have any goals to tell Koko?"

  return (
    <div className="goal-form-container">
      <div className="goal-form-cancel" onClick={() => closeForm()}>
        <ImCancelCircle />
        {/* <button >Cancel</button> */}
      </div>

      <h1>Hi, <span id="current-user-name">{currentUser.username}</span>! {headerPhrase}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="goal-inputs">
          <label>
            Goal Details <span className="goal-errors">{ errors.description?.message }</span>
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
            When do you envision to complete it? <span id="optional">optional</span>
            <input type='date'
              {...register('date')}
            />
          </label>
        </div>

        <div className="goal-form-buttons">
          <button className="goal-form-submit">{ goal ? "Update" : "Add"} Goal</button>
          { goal ? <button type="button" onClick={handleDelete}>Delete</button> : null}
        </div>
      </form>
    </div>
  );
};

export default GoalForm
