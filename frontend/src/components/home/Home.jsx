import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReflectionsWidget from '../reflections/ReflectionsWidget';
import CreateReflectionContainer from '../reflections/CreateReflectionContainer';
import UpdateReflectionContainer from '../reflections/UpdateReflectionContainer';
import CreateGoalForm from '../goals/CreateGoalForm';
import GoalsWidget from '../goals/GoalsWidget';
import MoodTracker from '../mood/MoodTracker';
import Koko from '../koko/Koko';

export const Home = (props) => {
  const [showCreateReflection, setShowCreateReflection] = useState(false);
  const [showEditReflection, setShowEditReflection] = useState(false);
  const [reflectionToEdit, setReflectionToEdit] = useState(null);

  const [showCreateGoal, setShowCreateGoal] = useState(false);

  const openEditGoalForm = (reflection) => {
    setReflectionToEdit(reflection);
    setShowEditReflection(true);
  }

  const displayGoalsComponent = () => {
    if (showCreateGoal) {
      return (
        <CreateGoalForm closeForm={() => setShowCreateGoal(false)} />
      )
    } else {
      return (
        <GoalsWidget openCreateForm={() => setShowCreateGoal(true)} />
      )
    }
   }

  const displayComponents = () => {
    if (showCreateReflection) {
      return (
        <CreateReflectionContainer closeForm={() => setShowCreateReflection(false)} />
      )
    } else if (showEditReflection) {
      return (
        <UpdateReflectionContainer closeForm={() => setShowEditReflection(false)} reflection={reflectionToEdit} />
      )
    } else {
      return (
        <>
          <MoodTracker />
          { displayGoalsComponent() }
          <ReflectionsWidget openCreateForm={() => setShowCreateReflection(true)} openEditForm={openEditGoalForm} />
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
