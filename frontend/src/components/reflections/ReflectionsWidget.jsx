import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { fetchReflections } from '../../actions/reflections_actions';
import ReflectionWidgetItem from './ReflectionWidgetItem';
import { getSortedReflections } from '../../reducers/selectors';

export const ReflectionsWidget = ({ openCreateForm, openEditForm, currentUser, reflections, fetchReflections }) => {

  useEffect(() => {
    fetchReflections(currentUser.id);
  }, [fetchReflections, currentUser]);

  const sliderRef = useRef();

  const settings = {
    arrows: false,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {reflections.map(reflection => <ReflectionWidgetItem key={reflection._id} reflection={reflection} openEditForm={openEditForm} />)}
      </Slider>

      <button onClick={() => sliderRef.current.slickPrev()}>Prev</button>
      <button onClick={openCreateForm}>Add a New Entry</button>
      <button onClick={() => sliderRef.current.slickNext()}>Next</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  reflections: getSortedReflections(state)
})

const mapDispatchToProps = {
  fetchReflections
}

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionsWidget)
