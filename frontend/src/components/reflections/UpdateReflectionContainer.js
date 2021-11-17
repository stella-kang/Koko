import { connect } from 'react-redux'
import ReflectionForm from './ReflectionForm';
import { updateReflection } from '../../actions/reflections_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  reflection: state.entities.reflections[ownProps.reflectionId]
})

const mapDispatchToProps = {
  processForm: updateReflection
}

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionForm)
