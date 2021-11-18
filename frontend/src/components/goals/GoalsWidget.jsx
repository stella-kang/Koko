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
  location,
  updateExp
}) => {

  useEffect(() => {
    requestGoals(currentUser.id);
  }, [requestGoals, currentUser.id]);

  const handleButtonClick = (goal) => {
    const newGoal = { ...goal };

    newGoal.status = !goal.status;
    newGoal.id = goal._id;
    updateGoal(newGoal)
      .then(() => {
        if (newGoal.status) updateExp(currentUser.id, 1);
      })
  };

  const notCompleted = goals.map((goal) =>
    <GoalsWidgetItem key={goal._id} goal={goal} handleButtonClick={() => handleButtonClick(goal)} openEditForm={openEditForm} />
  );

  return (
    <div className={`goals-widget-container ${location.pathname.includes("day") ? "day-show-goals" : null}`}>
      <h2>{type === "Ongoing" ? "Ongoing" : ""} Goals</h2>

      <div className="goals-widget-list">
        {goals.length !== 0 ? notCompleted : <div className="missing-content">No goals recorded.</div>}
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
