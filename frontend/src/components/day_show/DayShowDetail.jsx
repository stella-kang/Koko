import React, { useState } from 'react';
import MoodItem from "./MoodItem";
import DayGoalsContainer from './DayGoalsContainer';
import CreateGoalContainer from '../goals/CreateGoalContainer';
import EditGoalContainer from '../goals/EditGoalContainer';
import DayReflectionsContainer from './DayReflectionsContainer';

export const DayShowDetail = ({ isToday, openReflectionShow, mood, goals, reflections }) => {
  const [showCreateGoal, setShowCreateGoal] = useState(false);
  const [showEditGoal, setShowEditGoal] = useState(false);
  const [goalToEdit, setGoalToEdit] = useState(null);

  const openEditGoalForm = (goal) => {
    setGoalToEdit(goal);
    setShowEditGoal(true);
  }

  const displayGoalsComponent = () => {
    if (showCreateGoal) {
      return (
        <CreateGoalContainer closeForm={() => setShowCreateGoal(false)} />
      )
    } else if (showEditGoal) {
      return (
        <EditGoalContainer closeForm={() => setShowEditGoal(false)} goal={goalToEdit} />
      )
    } else {
      return (
        <DayGoalsContainer isToday={isToday} goals={goals} openCreateForm={() => setShowCreateGoal(true)} openEditForm={openEditGoalForm} />
      )
    }
   }

  return (
    <div className="day-details">
      <div className="day-show-first-row">
        <div className="day-details-mood">
          <h2>Recorded Mood:</h2>
          {mood ? <MoodItem mood={mood} /> : <div className="no-mood">Mood not recorded.</div> }
        </div>

        <div className="day-details-goals">
          {/* <div className="day-details-goals-list">
            {goals.map(goal => {
              return <GoalItem goal={goal} key={goal.id}/>
            })}
          </div> */}

          { displayGoalsComponent() }
        </div>
      </div>

      <div className="day-details-reflections">
        {/* <h2>Journal Entries:</h2> */}
        {/* <div className="day-details-reflections-list">
          {reflections.map(reflection => {
            return <ReflectionItem openEditForm={openEditForm} reflection={reflection} key={reflection.id}/>
          })}
        </div> */}

        <DayReflectionsContainer isToday={isToday} reflections={reflections} openReflectionShow={openReflectionShow} />
      </div>
    </div>
  );
};

export default DayShowDetail;
