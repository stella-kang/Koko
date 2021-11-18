import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { AiFillCheckCircle } from 'react-icons/ai';
import { HiPencil } from 'react-icons/hi';

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

  const moodsRef = useRef();

  useEffect(() => {
    moodsRef.current?.scrollIntoView();
  })

  const colors = ['#3d5a80', '#4a6f9e', '#5987c2', '#6599db', '#6ea7f0']
  const missingColor = '#959aa1';


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
      <div key={date} className="mood-garden-item"
      >
        <div className="mood-square" style={{ backgroundColor: color }}></div>
        <div className="mood-date">
          {date.substring(0, date.length-5)}
        </div>
      </div>
    )
  })

  const numCompleted = goals.filter(goal => goal.status).length;

  return (
    <div className='stats-widget-container'>
      <div className='moods-garden-container'>
        <h5>Mood History</h5>
        <div className="mood-garden">
          { moodsGarden }

          <div ref={moodsRef}></div>
        </div>
      </div>


      <div className="stat-counters">
        <div className='stat-tracker'>
          <AiFillCheckCircle className="stat-icon"/>
          <div>
            <p>You've completed {numCompleted} goals.</p>
            <p>Koko: '{goals.length > 0 ? "Keep it up!" : "Try adding new goals!"}'</p>
          </div>
        </div>

        <div className='stat-tracker'>
          <HiPencil className="stat-icon"/>
          <div>
            <p>You've written {reflections.length} journal entries.</p>
            <p>Koko: '{reflections.length > 0 ? "Way to go!" : "Try journaling!"}'</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mSTP)(StatsWidget);
