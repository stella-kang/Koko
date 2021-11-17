import React from 'react';
import { connect } from 'react-redux';
import { getSortedMoods } from '../../reducers/selectors';

const mSTP = (state) => {
  return {
    moods: getSortedMoods(state),
    reflections: Object.values(state.entities.reflections),
    goals: Object.values(state.entities.goals)
  };
};

export const StatsWidget = ({
  moods,
  reflections,
  goals
}) => {

  const numCompleted = goals.filter(goal => goal.status).length;

  return (
    <div className='stats-widget-container'>
      <div className='moods-garden'>
        <p>Total number of mood squares is: {moods.length}</p>
      </div>

      <div className='goals-tracker'>
        <p>You've completed {numCompleted} goals out of {goals.length}. { goals.length > 0 ?"Keep it up!" : "Try adding new goals!"}</p>
      </div>

      <div className='journal-tracker'>
        <p>You've written {reflections.length} journal entries. { reflections.length > 0 ?"Way to go!" : "Try journaling!"}</p>
      </div>
    </div>
  );
};

export default connect(mSTP)(StatsWidget);
