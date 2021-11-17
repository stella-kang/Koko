import { connect } from 'react-redux'
import GoalForm from './GoalForm';
import { createGoal } from '../../actions/goal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.user
})

const mapDispatchToProps = {
  processForm: createGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)
