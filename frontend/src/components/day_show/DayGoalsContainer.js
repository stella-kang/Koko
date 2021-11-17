import { connect } from 'react-redux';
import { updateGoal } from '../../actions/goal_actions';
import GoalsWidget from '../goals/GoalsWidget';

const mapStateToProps = (state) => ({
  type: "Day",
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  requestGoals: () => null,
  updateGoal: goal => dispatch(updateGoal(goal))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsWidget);
