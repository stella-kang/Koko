import { connect } from 'react-redux';
import { updateGoal } from '../../actions/goal_actions';
import { updateExp } from '../../actions/session_actions';
import GoalsWidget from '../goals/GoalsWidget';

const mapStateToProps = (state) => ({
  type: "Day",
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  requestGoals: () => null,
  updateGoal: goal => dispatch(updateGoal(goal)),
  updateExp: (currentUserId, points) => dispatch(updateExp(currentUserId, points))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsWidget);
