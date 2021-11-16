import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ReflectionsWidget from '../reflections/ReflectionsWidget';
import CreateReflectionContainer from '../reflections/CreateReflectionContainer';

export const Home = (props) => {
  const [showCreateReflection, setShowCreateReflection] = useState(false);

  const displayComponents = () => {
    if (showCreateReflection) {
      return (
        <CreateReflectionContainer closeForm={() => setShowCreateReflection(false)} />
      )
    }

    return (
      <Route exact path='/home' render={() => <ReflectionsWidget showForm={() => setShowCreateReflection(true)} />} />
    )
  }

  return (
    <div>
      <h1>This is home</h1>

      { displayComponents() }

    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
