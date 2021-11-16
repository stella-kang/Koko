import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchMoods, createMood, updateMood } from '../../actions/mood_actions';
import { getTodaysMood } from '../../reducers/selectors';

const mSTP = (state) => ({
  currentMood: getTodaysMood(state),
  currentUserId: state.session.user.id,
});

const mDTP = {
  fetchMoods,
  createMood,
  updateMood,
};

const MoodTracker = ({
  currentMood,
  currentUserId,
  fetchMoods,
  createMood,
  updateMood,
}) => {
  const [mood, setMood] = useState(currentMood?.mood);
  const [changedMood, setChangedMood] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchMoods(currentUserId);
  }, [currentUserId, fetchMoods]);

  const submitRef = useRef();

  useEffect(() => {
    if (changedMood) {
      submitRef.current?.requestSubmit();
      setChangedMood(false);
    }
  }, [mood, changedMood]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      updateMood({
        mood: mood,
        id: currentMood._id,
      });

      setEdit(false);
    } else {
      createMood({
        mood: mood,
        userId: currentUserId,
      });
    }
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  const clickSubmit = (e) => {
    if (currentMood.mood !== parseInt(e.currentTarget.value)) {
      setChangedMood(true);
      setMood(e.currentTarget.value);
    }
  };

  if (!currentMood || edit) {
    return (
      <div className='mood-tracker'>
        <div className='mood-display'>
          <h3>How are you feeling today?</h3>

          <form onSubmit={handleSubmit} ref={submitRef}>
            <label>
              &#128542;
              <input
                type='radio'
                name='mood'
                value='1'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 1}
              ></input>
            </label>
            <label>
              &#128533;
              <input
                type='radio'
                name='mood'
                value='2'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 2}
              ></input>
            </label>
            <label>
              &#128528;
              <input
                type='radio'
                name='mood'
                value='3'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 3}
              ></input>
            </label>
            <label>
              &#128522;
              <input
                type='radio'
                name='mood'
                value='4'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 4}
              ></input>
            </label>
            <label>
              &#128513;
              <input
                type='radio'
                name='mood'
                value='5'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 5}
              ></input>
            </label>
          </form>
        </div>
        {edit ? (
          <button type='button' onClick={cancelEdit}>
            Cancel
          </button>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className='mood-tracker'>
        <div className='mood-display'>
          <h3>Today's Mood:</h3>
          <div className='moods'>
            {currentMood.mood === 5 ? (
              <div>&#128513;</div>
            ) : currentMood.mood === 4 ? (
              <div>&#128522;</div>
            ) : currentMood.mood === 3 ? (
              <div>&#128528;</div>
            ) : currentMood.mood === 2 ? (
              <div>&#128533;</div>
            ) : (
              <div>&#128542;</div>
            )}
          </div>
        </div>
        <button onClick={handleEdit}>Edit Mood</button>
      </div>
    );
  }
};

export default connect(mSTP, mDTP)(MoodTracker);
