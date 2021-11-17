import { connect } from 'react-redux'
import GoalForm from './GoalForm';
import { createGoal } from '../../actions/goal_actions';
import { updateExp } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.user
})

const mapDispatchToProps = {
  processForm: createGoal,
  updateExp
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)
