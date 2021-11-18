import { connect } from 'react-redux';
import DayShowDetail from './DayShowDetail';
import { getShowDetailGoals, getShowDetailMood, getShowDetailReflections } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  return {
    mood: getShowDetailMood(state, ownProps.calDate),
    goals: getShowDetailGoals(state, ownProps.calDate),
    reflections: getShowDetailReflections(state, ownProps.calDate)
  }
}

export default connect(mSTP)(DayShowDetail)
