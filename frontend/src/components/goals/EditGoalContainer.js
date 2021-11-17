import { connect } from 'react-redux'
import GoalForm from './GoalForm';
import { updateGoal, deleteGoal } from '../../actions/goal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.user
})

const mapDispatchToProps = {
  processForm: updateGoal,
  deleteGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)
