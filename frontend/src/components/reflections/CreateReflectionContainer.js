import { connect } from 'react-redux'
import ReflectionForm from './ReflectionForm';
import { createReflection } from '../../actions/reflections_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.user
})

const mapDispatchToProps = {
  createReflection
}

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionForm)
