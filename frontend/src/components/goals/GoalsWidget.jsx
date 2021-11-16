import { connect } from 'react-redux';
import { requestGoals, updateGoal } from '../../actions/goal_actions';
import React, { useEffect } from 'react';

export const GoalsWidget = ({
  notCompletedGoals,
  requestGoals,
  updateGoal,
  currentUser
}) => {

  useEffect(() => {
    requestGoals(currentUser.id);
  }, [requestGoals, currentUser]);

  const handleButtonClick = (goal) => {
    const newGoal = { ...goal };
    newGoal.status = !goal.status;
    updateGoal(newGoal);
  };

  let notCompleted = notCompletedGoals.map((goal) => {
    return (
      <div key={goal._id}>
        <p>{goal.title}</p>
        <section>{goal.description}</section>
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

  console.log(notCompletedGoalsArr)

  return {
    currentUser: state.session.user,
    notCompletedGoals: notCompletedGoalsArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGoals: (userId) => dispatch(requestGoals(userId)),
    updateGoal: (goal) => dispatch(updateGoal(goal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsWidget);
