import React from 'react';
// import { connect } from 'react-redux';
// import { requestGoals } from '../../actions/goal_actions';
// import { fetchMoods } from '../../util/mood_api_util';

export const DayShowDetail = ({dayShow}) => {
  if (Object.keys(dayShow).length === 0) {
    return null;
  } else {
    return (
      <div className="day-details">
        <div className="day-details-mood">
          <h2>Mood</h2>
          <div>{dayShow.mood[0].mood}</div>
        </div>

        <div className="day-details-goals">
          <h2>Goals</h2>
          <div>{dayShow.goal[0] ? dayShow.goal[0].id : null}</div>
        </div>

        <div className="day-details-reflections">
          <h2>Journal Entries</h2>
          <div>{dayShow.reflection[0].entry}</div>
        </div>
      </div>
    );
  }
};

export default DayShowDetail;

// const mapStateToProps = (state) => {
//   // selector to return goals from today
//   // ?  should this be singular or plural?
//   let goalsArr = Object.values(state.entities.goals);
//   let journalsArr = Object.values(state.entities.journals);

//   return {
//     todaysGoal: goalsArr[goalsArr.length - 1],
//     todaysMood: state.entities.mood,
//     todaysJournalEntry: journalsArr[journalsArr.length - 1],
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   requestGoals: () => dispatch(requestGoals()),
//   fetchMoods: (userId) => dispatch(fetchMoods(userId)),
//   // requestJournal: (journalId) => dispatch(requestJournal(journalId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail);
