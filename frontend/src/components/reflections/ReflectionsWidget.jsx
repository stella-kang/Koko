import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { fetchReflections } from '../../actions/reflections_actions';

export const ReflectionsWidget = ({ currentUser, reflections, fetchReflections }) => {

  useEffect(() => {
    fetchReflections(currentUser.id);
  }, [fetchReflections, currentUser]);

  return (
    <div>
      {reflections.map(reflection => <div key={reflection._id}>{ reflection.entry }</div>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  reflections: Object.values(state.entities.reflections)
})

const mapDispatchToProps = {
  fetchReflections
}

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionsWidget)
