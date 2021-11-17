import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReflectionsWidget from '../reflections/ReflectionsWidget';
import ReflectionShowForm from '../reflections/ReflectionShowForm';
import CreateGoalContainer from '../goals/CreateGoalContainer';
import EditGoalContainer from '../goals/EditGoalContainer';
import GoalsWidget from '../goals/GoalsWidget';
import MoodTracker from '../mood/MoodTracker';
import Koko from '../koko/Koko';

export const Home = (props) => {
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionId, setReflectionId] = useState();

  const [showCreateGoal, setShowCreateGoal] = useState(false);
  const [showEditGoal, setShowEditGoal] = useState(false);
  const [goalToEdit, setGoalToEdit] = useState(null);

  const openEditGoalForm = (goal) => {
    setGoalToEdit(goal);
    setShowEditGoal(true);
  }

  const openReflectionShow = (reflectionId) => {
    setReflectionId(reflectionId);
    setShowReflection(true);
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
        <GoalsWidget openCreateForm={() => setShowCreateGoal(true)} openEditForm={openEditGoalForm} />
      )
    }
   }

  const displayComponents = () => {
    if (showReflection) {
      return (
        <ReflectionShowForm closeForm={() => setShowReflection(false)} reflectionId={reflectionId} openReflectionShow={openReflectionShow} />
      )
    } else {
      return (
        <>
          <MoodTracker />
          { displayGoalsComponent() }
          <ReflectionsWidget openReflectionShow={openReflectionShow} />
        </>
      )
    }
  }

  return (
    <div>
      <h1>This is home</h1>

      <Koko />

      { displayComponents() }

    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
