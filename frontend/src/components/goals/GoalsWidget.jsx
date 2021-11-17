import React, { useEffect } from 'react';
import GoalsWidgetItem from './GoalsWidgetItem';

export const GoalsWidget = ({
  type,
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

  const notCompleted = goals.map((goal) =>
    <GoalsWidgetItem key={goal._id} goal={goal} handleButtonClick={() => handleButtonClick(goal)} openEditForm={openEditForm} />
  );

  return (
    <div>
      <h2>{type === "Ongoing" ? "Ongoing" : ""} Goals</h2>
      {notCompleted}

      <button onClick={openCreateForm}>
        Add a Goal
      </button>
    </div>
  );
};

export default GoalsWidget;
