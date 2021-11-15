import { connect } from 'mongoose';
import React, { useEffect } from 'react';
import { requestGoals, deleteGoal } from '../../actions/goal_actions';
import CreateGoalForm from './CreateGoalForm';
import GoalItem from './GoalItem';

export const GoalsIndex = ({ allGoals, requestGoals, deleteGoal }) => {
  useEffect(() => {
    requestGoals();
  }, [requestGoals]);

  const listAllGoals = allGoals.map((goal) => {
    return (
      <li>
        <GoalItem
          key={goal.id}
          title={goal.title}
          body={goal.body}
          onDelete={deleteGoal}
        />
      </li>
    );
  });

  return (
    <div>
      <CreateGoalForm />
      <ul>{listAllGoals}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allGoals: Object.values(state.entities.goals),
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestGoals: () => dispatch(requestGoals()),
  deleteGoal: (goalId) => dispatch(deleteGoal(goalId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsIndex);
