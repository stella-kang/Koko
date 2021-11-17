import React, { useEffect } from 'react';
import GoalsWidgetItem from './GoalsWidgetItem';

export const GoalsWidget = ({
  type,
  isToday,
  goals,
  requestGoals,
  updateGoal,
  currentUser,
  openCreateForm,
  openEditForm
}) => {

  useEffect(() => {
    requestGoals(currentUser.id);
  }, [requestGoals, currentUser]);

  const handleButtonClick = (goal) => {
    const newGoal = { ...goal };
    newGoal.status = !goal.status;
    updateGoal(newGoal);
  };

  const notCompleted = notCompletedGoals.map((goal) =>
    <GoalsWidgetItem
      key={goal._id}
      // className="goals-widget-item"
      goal={goal}
      handleButtonClick={() => handleButtonClick(goal)} openEditForm={openEditForm}
    />
  );

  return (
    <div className="goals-widget-container">
      <h2>Ongoing Goals</h2>
      <div className="goals-widget-list">
        {notCompleted}
      </div>

      <button className="add-goal-button" onClick={openCreateForm}>
        Add a Goal
      </button>
    </div>
  );
};

export default GoalsWidget;
