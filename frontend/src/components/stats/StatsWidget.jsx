import React from 'react';
import { connect } from 'react-redux';
import { getSortedMoods } from '../../reducers/selectors';

const mSTP = (state) => {
  return {
    joinDate: state.session.user.createdAt,
    moods: state.entities.moods,
    reflections: Object.values(state.entities.reflections),
    goals: Object.values(state.entities.goals)
  };
};

const StatsWidget = ({
  joinDate,
  moods,
  reflections,
  goals
}) => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue']
  const missingColor = 'grey';


  const startDate = new Date(joinDate);
  const today = new Date();

  const dates = [];

  for (let d = startDate; d <= today; d.setDate(d.getDate() + 1)) {
    dates.push(d.toLocaleDateString());
  }

  if (dates[dates.length-1] !== today.toLocaleDateString()) dates.push(today.toLocaleDateString());


  const moodsByDate = {}
  for (let mood of Object.values(moods)) {
    moodsByDate[new Date(mood.createdAt).toLocaleDateString()] = mood;
  }

  const moodsGarden = dates.map(date => {
    const color = moodsByDate[date] ? colors[moodsByDate[date].mood -1 ] : missingColor
    return (
      <div key={date} className="mood-square"
        style={{backgroundColor: color}}
      >
        <div className="mood-date">
          {date}
        </div>
      </div>
    )
  })

  const numCompleted = goals.filter(goal => goal.status).length;

  return (
    <div className='stats-widget-container'>
      <div className='moods-garden-container'>
        <p>Mood History</p>

        <div className="mood-garden">
          { moodsGarden }
        </div>
      </div>

      <div className='goals-tracker'>
        <p>You've completed {numCompleted} goals. { goals.length > 0 ? "Keep it up!" : "Try adding new goals!"}</p>
      </div>

      <div className='journal-tracker'>
        <p>You've written {reflections.length} journal entries. { reflections.length > 0 ?"Way to go!" : "Try journaling!"}</p>
      </div>
    </div>
  );
};

export default connect(mSTP)(StatsWidget);
