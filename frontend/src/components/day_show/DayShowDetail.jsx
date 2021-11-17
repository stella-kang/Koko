import React from 'react';
import MoodItem from "./MoodItem";
import GoalItem from "./GoalItem";
import ReflectionItem from './ReflectionItem';

export const DayShowDetail = ({mood, goals, reflections, openEditForm}) => {
    return (
      <div className="day-details">
        <div className="day-details-mood">
          <h2>Mood:</h2>
          {mood ? <MoodItem mood={mood} /> : <div>Mood not recorded.</div> }
        </div>

        <div className="day-details-goals">
          <h2>Goals:</h2>
          <div className="day-details-goals-list">
            {goals.map(goal => {
              return <GoalItem goal={goal} key={goal.id}/>
            })}
          </div>
        </div>

        <div className="day-details-reflections">
          <h2>Journal Entries:</h2>
          <div className="day-details-reflections-list">
            {reflections.map(reflection => {
              return <ReflectionItem openEditForm={openEditForm} reflection={reflection} key={reflection.id}/>
            })}
          </div>
        </div>
      </div>
    );
};

export default DayShowDetail;
