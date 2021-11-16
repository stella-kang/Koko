import React from 'react';
import { connect } from 'react-redux';
import { requestGoals } from '../../actions/goal_actions';
import { fetchMood } from '../../util/mood_api_util';

export const ActivityDisplay = (props) => {

  

  return (
    <div>
      <h2>Completed Goals</h2>

      <h2>Mood</h2>

      <h2>Journal Entry</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  // selector to return goals from today
  let todaysGoalsArr = [];
  return {
    todaysGoals: todaysGoalsArr,
    todaysMood: state.entities.mood,
    todaysJournalEntry: state.entities.journal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestGoals: () => dispatch(requestGoals()),
  fetchMood: (userId) => dispatch(fetchMood(userId)),
  // requestJournal: (journalId) => dispatch(requestJournal(journalId)),
});
