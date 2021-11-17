import { connect } from 'react-redux';
import ReflectionsWidget from '../reflections/ReflectionsWidget';

const mapStateToProps = (state) => ({
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  fetchReflections: () => null
})

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionsWidget);
