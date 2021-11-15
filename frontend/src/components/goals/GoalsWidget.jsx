import { connect } from 'mongoose';
import { requestGoals, updateGoal } from '../../actions/goal_actions';
import React, { useEffect } from 'react';

export const GoalsWidget = ({
  notCompletedGoals,
  requestGoals,
  updateGoal,
}) => {
  useEffect(() => {
    requestGoals();
  }, [requestGoals]);

  const handleButtonClick = (goal) => {
    const newGoal = { ...goal };
    newGoal.status = !goal.status;
    updateGoal(newGoal);
  };

  let notCompleted = notCompletedGoals.map((goal) => {
    return (
      <div>
        <p>{goal.title}</p>
        <section>{goal.body}</section>
        <button onClick={() => handleButtonClick(goal)}>Done?</button>
      </div>
    );
  });

  return <div>{notCompleted}</div>;
};

const mapStateToProps = (state) => {
  let notCompletedGoalsArr = Object.values(state.entities.goals).filter(
    (goal) => goal.status === false
  );

  return {
    notCompletedGoals: notCompletedGoalsArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGoals: () => dispatch(requestGoals()),
    updateGoal: (goal) => dispatch(updateGoal(goal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsWidget);
