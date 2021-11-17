import { connect } from 'react-redux';
import DayShowDetail from './DayShowDetail';
import { getShowDetailGoals, getShowDetailMood, getShowDetailReflections } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  // const allMoods = Object.values(state.entities.moods);
  // const allGoals = Object.values(state.entities.goals);
  // const allReflections = Object.values(state.entities.reflections);

  return {
    // moods: allMoods.length !== 0 ? getShowDetailMoods(state, ownProps.calDate) : [] ,
    // goals: allGoals.length !== 0 ? getShowDetailGoals(state, ownProps.calDate) : [] ,
    // reflections: allReflections.length !== 0 ? getShowDetailReflections(state, ownProps.calDate) : []
    mood: getShowDetailMood(state, ownProps.calDate),
    goals: getShowDetailGoals(state, ownProps.calDate),
    reflections: getShowDetailReflections(state, ownProps.calDate)
  }
}

export default connect(mSTP)(DayShowDetail)
