import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import ReflectionWidgetItem from './ReflectionWidgetItem';

export const ReflectionsWidget = ({
  type,
  isToday,
  openReflectionShow,
  currentUser,
  reflections,
  fetchReflections,
}) => {
  useEffect(() => {
    fetchReflections(currentUser.id);
  }, [fetchReflections, currentUser]);

  const sliderRef = useRef();

  const settings = {
    arrows: false,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='main-reflection-widget-container'>
      <Slider
        {...settings}
        ref={sliderRef}
        className='reflection-widget-carousel-container'
      >
        {reflections.map((reflection) => (
          <ReflectionWidgetItem
            key={reflection._id}
            reflection={reflection}
            openReflectionShow={openReflectionShow}
          />
        ))}
      </Slider>
      <div className='carousel-btns-container'>
        <button onClick={() => sliderRef.current.slickPrev()}>Prev</button>

        { (isToday || type==="Ongoing") &&
          <button onClick={() => openReflectionShow(null)}>Add a New Entry</button>
        }
        <button onClick={() => sliderRef.current.slickNext()}>Next</button>
      </div>
    </div>
  );
};

export default ReflectionsWidget
