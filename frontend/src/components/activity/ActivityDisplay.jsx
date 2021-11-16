import React from 'react';
import { connect } from 'react-redux';
import { requestGoals } from '../../actions/goal_actions';
import { fetchMood } from '../../util/mood_api_util';

export const ActivityDisplay = ({
  todaysGoal,
  todaysMood,
  todaysJournalEntry,
}) => {
  return (
    <div>
      <h2>Completed Goals</h2>
      <div>{todaysGoal}</div>
      <h2>Mood</h2>
      <div>{todaysMood}</div>
      <h2>Journal Entry</h2>
      <div>{todaysJournalEntry}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // selector to return goals from today
  // ?  should this be singular or plural?
  let goalsArr = Object.values(state.entities.goals);
  let journalsArr = Object.values(state.entities.journals);

  return {
    todaysGoal: goalsArr[goalsArr.length - 1],
    todaysMood: state.entities.mood,
    todaysJournalEntry: journalsArr[journalsArr.length - 1],
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestGoals: () => dispatch(requestGoals()),
  fetchMood: (userId) => dispatch(fetchMood(userId)),
  // requestJournal: (journalId) => dispatch(requestJournal(journalId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDisplay);
