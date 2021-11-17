import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AllReflectionsContainer from '../reflections/AllReflectionsContainer';
import ReflectionShowForm from '../reflections/ReflectionShowForm';
import CreateGoalContainer from '../goals/CreateGoalContainer';
import EditGoalContainer from '../goals/EditGoalContainer';
import OngoingGoalsContainer from '../goals/OngoingGoalsContainer';
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
        <OngoingGoalsContainer openCreateForm={() => setShowCreateGoal(true)} openEditForm={openEditGoalForm} />
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
        <div className="home-widgets">
          <MoodTracker />
          <div className="home-bottom-row">
            {displayGoalsComponent()}
            <ReflectionsWidget openReflectionShow={openReflectionShow} />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="home">
      <Koko />

        {displayComponents()}
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
