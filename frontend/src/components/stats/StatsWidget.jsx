import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMoods } from '../../actions/mood_actions';
import { fetchReflections } from '../../actions/reflections_actions';
import { requestGoals } from '../../actions/goal_actions';

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    allMoods: Object.values(state.entities.moods),
    numReflections: Object.values(state.entities.reflections).length,
    numGoals: Object.values(state.entities.goals).length,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchMoods: (userId) => dispatch(fetchMoods(userId)),
    fetchReflections: (userId) => dispatch(fetchReflections(userId)),
    requestGoals: (userId) => dispatch(requestGoals(userId)),
  };
};

export const StatsWidget = ({
  fetchMoods,
  fetchReflections,
  requestGoals,
  allMoods,
  numReflections,
  numGoals,
  currentUser,
}) => {
  useEffect(() => {
    fetchMoods(currentUser.id);
  }, []);

  useEffect(() => {
    fetchReflections(currentUser.id);
  }, []);

  useEffect(() => {
    requestGoals(currentUser.id);
  }, []);

  return (
    <div className='stats-widget-container'>
      <div className='moods-garden'>
        <p>Total number of mood squares is: {allMoods.length}</p>
      </div>

      <div className='journal-tracker'>
        <p>Total number of journal entries: {numReflections}</p>
      </div>

      <div className='goals-tracker'>
        <p>Total number of goals: {numGoals}</p>
      </div>
    </div>
  );
};

export default connect(mSTP, mDTP)(StatsWidget);
