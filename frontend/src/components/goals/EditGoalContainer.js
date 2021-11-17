import { connect } from 'react-redux'
import GoalForm from './GoalForm';
import { updateGoal } from '../../actions/goal_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.user
})

const mapDispatchToProps = {
  processForm: updateGoal,
  openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)
