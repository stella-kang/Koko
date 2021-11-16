import { connect } from 'react-redux'
import ReflectionForm from './ReflectionForm';
import { updateReflection } from '../../actions/reflections_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.user
})

const mapDispatchToProps = {
  processForm: updateReflection
}

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionForm)
