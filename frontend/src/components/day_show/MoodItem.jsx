import React from 'react';

const MoodItem = ({mood}) => {
  return <div id="day-show-mood">
    {mood.mood === 5 ? <div>&#128513;</div> : mood.mood === 4 ? <div>&#128522;</div> : mood.mood === 3 ? <div>&#128528;</div> : mood.mood === 2 ? < div >&#128533;</div> : <div>&#128542;</div>}
  </div>
}

export default MoodItem;
