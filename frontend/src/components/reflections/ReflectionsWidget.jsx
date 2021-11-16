import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { fetchReflections } from '../../actions/reflections_actions';

export const ReflectionsWidget = ({ showForm, currentUser, reflections, fetchReflections }) => {

  useEffect(() => {
    fetchReflections(currentUser.id);
  }, [fetchReflections, currentUser]);

  const sliderRef = useRef();

  const settings = {
    arrows: false,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {reflections.map(reflection => <div className="journal-carousel-item" key={reflection._id}>{ reflection.entry }</div>)}
      </Slider>

      <button onClick={() => sliderRef.current.slickPrev()}>Prev</button>
      <button onClick={showForm}>Add a New Entry</button>
      <button onClick={() => sliderRef.current.slickNext()}>Next</button>
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
