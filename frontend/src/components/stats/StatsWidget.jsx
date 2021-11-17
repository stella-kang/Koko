import React from 'react';
import { connect } from 'react-redux';
import { getSortedMoods } from '../../reducers/selectors';

const mSTP = (state) => {
  return {
    moods: getSortedMoods(state),
    numReflections: Object.values(state.entities.reflections).length,
    numGoals: Object.values(state.entities.goals).length,
  };
};

export const StatsWidget = ({
  moods,
  numReflections,
  numGoals
}) => {

  console.log(moods)

  return (
    <div className='stats-widget-container'>
      <div className='moods-garden'>
        <p>Total number of mood squares is: {moods.length}</p>
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

export default connect(mSTP)(StatsWidget);
