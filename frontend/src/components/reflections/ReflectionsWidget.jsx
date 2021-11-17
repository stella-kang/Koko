import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import ReflectionWidgetItem from './ReflectionWidgetItem';
import { VscTriangleLeft, VscTriangleRight} from 'react-icons/vsc';

const ReflectionsWidget = ({
  type,
  isToday,
  openReflectionShow,
  currentUser,
  reflections,
  fetchReflections,
  location
}) => {
  useEffect(() => {
    fetchReflections(currentUser.id);
  }, [fetchReflections, currentUser]);

  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current?.slickGoTo(reflections.length-1);
  }, [reflections.length])

  const settings = {
    arrows: false,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={`main-reflection-widget-container ${location.pathname.includes("day") ? 'day-show-reflections' : null}`}>
      <h3>Journal Entries</h3>
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
        <button className="carousel-button" onClick={() => sliderRef.current.slickPrev()}>
          <VscTriangleLeft />
        </button>

        { (isToday || type==="All") &&
          <button onClick={() => openReflectionShow(null)}>Add a New Entry</button>
        }
        <button className="carousel-button" onClick={() => sliderRef.current.slickNext()}>
          <VscTriangleRight />
        </button>
      </div>
    </div>
  );
};

export default withRouter(ReflectionsWidget);
