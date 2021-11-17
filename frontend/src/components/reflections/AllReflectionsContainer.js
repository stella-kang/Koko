import { connect } from 'react-redux';
import { fetchReflections } from '../../actions/reflections_actions';
import { getSortedReflections } from '../../reducers/selectors';
import ReflectionsWidget from './ReflectionsWidget';

const mapStateToProps = (state) => ({
  type: "All",
  currentUser: state.session.user,
  reflections: getSortedReflections(state),
});

const mapDispatchToProps = {
  fetchReflections,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionsWidget);
