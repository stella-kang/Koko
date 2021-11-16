import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ReflectionsWidget from '../reflections/ReflectionsWidget';

export const Home = (props) => {
  return (
    <div>
      <h1>This is home</h1>

      <Route path='/home' component={ReflectionsWidget} />
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
