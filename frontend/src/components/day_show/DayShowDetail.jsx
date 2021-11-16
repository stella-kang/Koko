import React from 'react';
import MoodItem from "./MoodItem";
import GoalItem from "./GoalItem";
import JournalItem from './JournalItem';

export const DayShowDetail = ({openEditForm, dayShow}) => {
  if (Object.keys(dayShow).length === 0) {
    return null;
  } else {
    return (
      <div className="day-details">
        <div className="day-details-mood">
          <h2>Mood:</h2>
          <MoodItem mood={dayShow.mood[0]}/>
        </div>

        <div className="day-details-goals">
          <h2>Goals:</h2>
          <div className="day-details-goals-list">
            {dayShow.goal.map(goal => {
              return <GoalItem goal={goal} key={goal.id}/>
            })}
          </div>
        </div>

        <div className="day-details-reflections">
          <h2>Journal Entries:</h2>
          <div className="day-details-reflections-list">
            {dayShow.reflection.map(reflection => {
              return <JournalItem openEditForm={openEditForm} journal={reflection} key={reflection.id}/>
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default DayShowDetail;

