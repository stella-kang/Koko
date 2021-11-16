import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMoods, createMood, editMood } from '../../actions/mood_actions';

const mSTP = (state) => ({
  currentMood: state.entitites.mood,
  currentUserId: state.session.currentUserId,
})

const mDTP = {
  fetchMoods,
  createMood,
  editMood
}

const MoodTracker = ({ currentMood, currentUserId, fetchMoods, createMood, editMood }) => {
  const [mood, setMood] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchMoods();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      editMood({
        mood: mood,
        user_id: currentUserId,
        id: currentMood.id
      })

      setEdit(false);
    } else {
      createMood({
        mood: mood,
        user_id: currentUserId
      })
    }
  }

  const handleEdit = (e) => {
    setEdit(true);
  }

  const cancelEdit = (e) => {
    setEdit(false);
  }

  const clickSubmit = (e) => {
    setMood(e.target.value);
    document.getElementById("mood-form-button").click();
  }

  if (!currentMood || edit) {
    return <div className="mood-tracker">
      <div>How are you feeling today?</div>

      <form onSubmit={handleSubmit}>
        <label onClick={clickSubmit}>&#128542;
          <input type="radio" name="mood" value="1"></input>
        </label>
        <label onClick={clickSubmit}>&#128533;
          <input type="radio" name="mood" value="2"></input>
        </label>
        <label onClick={clickSubmit}>&#128528;
          <input type="radio" name="mood" value="3"></input>
        </label>
        <label onClick={clickSubmit}>&#128522;
          <input type="radio" name="mood" value="4"></input>
        </label>
        <label onClick={clickSubmit}>&#128513;
          <input type="radio" name="mood" value="5"></input>
        </label>
        <button id="mood-form-button"></button>
        {edit ? <button onClick={cancelEdit}>Cancel</button> : null}
      </form>
    </div>
  } else {
    <div className="mood-display">
      <div>Today's Mood:</div>
      {currentMood.mood === 5 ? <div>&#128513;</div> : currentMood.mood === 4 ? <div>&#128522;</div> : currentMood.mood === 3 ? <div>&#128528;</div> : currentMood.mood === 2 ? < div >&#128533;</div> : <div>&#128542;</div>}
      <button onClick={handleEdit}>Edit Mood</button>
    </div>
  }
}

export default connect(mSTP, mDTP)(MoodTracker);
