import React from 'react';
import { connect } from 'react-redux';
import ReflectionsWidget from '../reflections/ReflectionsWidget';
import GoalsWidget from '../goals/GoalsWidget';

export const Home = (props) => {
  return (
    <div>
      <h1>This is home</h1>

      <ReflectionsWidget />
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
