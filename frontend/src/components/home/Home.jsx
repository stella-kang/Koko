import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReflectionsWidget from '../reflections/ReflectionsWidget';
import CreateReflectionContainer from '../reflections/CreateReflectionContainer';
import UpdateReflectionContainer from '../reflections/UpdateReflectionContainer';
import GoalsWidget from '../goals/GoalsWidget';
import MoodTracker from '../mood/MoodTracker';
import Koko from '../koko/koko';

export const Home = (props) => {
  const [showCreateReflection, setShowCreateReflection] = useState(false);
  const [showEditReflection, setShowEditReflection] = useState(false);
  const [reflectionToEdit, setReflectionToEdit] = useState(null);

  const openEditForm = (reflection) => {
    setReflectionToEdit(reflection);
    setShowEditReflection(true);
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
          {/* <GoalsWidget /> */}
          <ReflectionsWidget openCreateForm={() => setShowCreateReflection(true)} openEditForm={openEditForm} />
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
