import React from 'react';
import { useForm } from 'react-hook-form';
import { ImCancelCircle } from 'react-icons/im';
import { withRouter } from 'react-router-dom';

const GoalForm = ({ currentUser, processForm, updateExp, closeForm, goal, openModal, location }) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: {
      description: goal ? goal.description : '',
      date: goal?.dueDate ? new Date(goal.dueDate).toISOString().substr(0, 10): ''
    }
  });

  const onSubmit = (data) => {
    const formGoal = {
      description: data.description,
      dueDate: data.date,
      userId: currentUser.id,
      status: false
    };
    if (goal) {
      formGoal['status'] = goal.status;
      formGoal['id'] = goal._id;
    }

    if (formGoal.dueDate) {
      const date = new Date(formGoal.dueDate);
      const timezoneOffset = date.getTimezoneOffset() * 60000;
      formGoal.dueDate = new Date(date.getTime() + timezoneOffset);
    }

    processForm(formGoal)
      .then(action => {
        if (action.type ==="RECEIVE_GOAL") closeForm();
      }).then(() => {
        if (!goal) updateExp(currentUser.id, 1);
      })

  };

  const handleDelete = () => {
    openModal({
      type: "deleteGoal",
      goal: goal,
      closeForm: closeForm
    })
  }

  const headerPhrase = goal ? "it's okay to adjust your goals!" : "Do you have any goals to tell Koko?"

  return (
    <div className={`goal-form-container ${location.pathname.includes("day") ? 'day-show-goal-form' : null}`}>
      <div className="goal-form-cancel" onClick={() => closeForm()}>
        <ImCancelCircle />
        {/* <button >Cancel</button> */}
      </div>

      {location.pathname.includes("day") ? null : <h1>Hi, <span id="current-user-name">{currentUser.username}</span>! {headerPhrase}</h1>}
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
            <div>
            When do you envision to complete it? <span id="optional">optional</span>
            </div>
            <input type='date'
              {...register('date')}
            />
          </label>
        </div>

        <div className="goal-form-buttons">
          <button className="goal-form-submit">{ goal ? "Update" : "Add"} Goal</button>
          { goal ? <button id="goal-form-delete-button" type="button" onClick={handleDelete}>Delete</button> : null}
        </div>
      </form>
    </div>
  );
};

export default withRouter(GoalForm);
