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
  }, [fetchReflections, currentUser.id]);

  const sliderRef = useRef();

  const settings = {
    arrows: false,
    speed: 500,
    infinite: reflections.length > 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: -3
  };

  return (
    <div className={`main-reflection-widget-container ${location.pathname.includes("day") ? 'day-show-reflections' : null}`}>
      <h3>Journal Entries</h3>
      {reflections.length === 0 ? <div className="missing-content missing-reflections">No reflections recorded.</div> : null}
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
        { reflections.length > 3 &&
        <button className="carousel-button" onClick={() => sliderRef.current.slickPrev()}>
          <VscTriangleLeft />
        </button> }

        { (isToday || type==="All") &&
          <button className="carousel-new-button" onClick={() => openReflectionShow(null)}>Add a New Entry</button>
        }
        { reflections.length > 3 &&
        <button className="carousel-button" onClick={() => sliderRef.current.slickNext()}>
          <VscTriangleRight />
        </button> }
      </div>
    </div>
  );
};

export default withRouter(ReflectionsWidget);
