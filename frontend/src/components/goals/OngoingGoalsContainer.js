import { connect } from 'react-redux';
import { requestGoals, updateGoal } from '../../actions/goal_actions';
import GoalsWidget from './GoalsWidget';

const mapStateToProps = (state) => {
  let notCompletedGoalsArr = Object.values(state.entities.goals).filter(
    (goal) => goal.status === false
  );

  return {
    type: "Ongoing",
    currentUser: state.session.user,
    goals: notCompletedGoalsArr,
  };
};

const mapDispatchToProps = {
  requestGoals,
  updateGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsWidget);
