import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestGoals, updateGoal } from '../../actions/goal_actions';
import { openModal } from '../../actions/modal_actions';
import GoalsWidgetItem from './GoalsWidgetItem';

export const GoalsWidget = ({
  notCompletedGoals,
  requestGoals,
  updateGoal,
  openModal,
  currentUser,
  openCreateForm
}) => {

  useEffect(() => {
    requestGoals(currentUser.id);
  }, [requestGoals, currentUser]);

  const handleButtonClick = (goal) => {
    const newGoal = { ...goal };
    newGoal.status = !goal.status;
    updateGoal(newGoal);
  };

  const notCompleted = notCompletedGoals.map((goal) => <GoalsWidgetItem key={goal._id} goal={goal} handleButtonClick={() => handleButtonClick(goal)} />);

  return (
    <div>
      <h2>Goals</h2>
      {notCompleted}

      <button onClick={openCreateForm}>
        Add a Goal
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  let notCompletedGoalsArr = Object.values(state.entities.goals).filter(
    (goal) => goal.status === false
  );

  return {
    currentUser: state.session.user,
    notCompletedGoals: notCompletedGoalsArr,
  };
};

const mapDispatchToProps = {
  requestGoals,
  updateGoal,
  openModal
}

// (dispatch) => {
//   return {
//     requestGoals: (userId) => dispatch(requestGoals(userId)),
//     updateGoal: (goal) => dispatch(updateGoal(goal)),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(GoalsWidget);
