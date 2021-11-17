import React, { useEffect } from 'react';
import GoalsWidgetItem from './GoalsWidgetItem';
import { withRouter } from 'react-router-dom'

const GoalsWidget = ({
  type,
  isToday,
  goals,
  requestGoals,
  updateGoal,
  currentUser,
  openCreateForm,
  openEditForm,
  location
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
    <div className={`goals-widget-container ${location.pathname.includes("day") ? "day-show-goals" : null}`}>
      <h2>{type === "Ongoing" ? "Ongoing" : ""} Goals</h2>

      <div className="goals-widget-list">
        {notCompleted}
      </div>

      { (isToday || type==="Ongoing") &&
        <button className="add-goal-button" onClick={openCreateForm}>
          Add a Goal
        </button>
      }
    </div>
  );
};

export default withRouter(GoalsWidget);
