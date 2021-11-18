import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchMoods, createMood, updateMood } from '../../actions/mood_actions';
import { getTodaysMood } from '../../reducers/selectors';
import { updateExp } from '../../actions/session_actions';
import { AiFillEdit } from 'react-icons/ai';
import { MdCancelPresentation } from 'react-icons/md';


const mSTP = (state) => ({
  currentMood: getTodaysMood(state),
  currentUserId: state.session.user.id,
});

const mDTP = {
  fetchMoods,
  createMood,
  updateMood,
  updateExp
};

const MoodTracker = ({
  currentMood,
  currentUserId,
  fetchMoods,
  createMood,
  updateMood,
  updateExp
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
      updateExp(currentUserId, 2)
    }
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  const clickSubmit = (e) => {
    if (!currentMood || currentMood.mood !== parseInt(e.currentTarget.value)) {
      setChangedMood(true);
      setMood(e.currentTarget.value);
    } else {
      setEdit(false);
      setChangedMood(false);
    }
  };

  if (!currentMood || edit) {
    return (
      <div className='mood-tracker'>
        {edit ? (
          <div id="cancel-button">
            <button type='button' onClick={cancelEdit}>
              <MdCancelPresentation />
            </button>
          </div>
        ) : <div id="empty-space"></div>}

        <div className='mood-form'>

          <h3>How are you feeling today?</h3>

          <form onSubmit={handleSubmit} ref={submitRef}>
            <label className="mood-radio-button mood-1">
              &#128542;
              <input
                type='radio'
                name='mood'
                value='1'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 1}
              ></input>
            </label>
            <label className="mood-radio-button mood-2">
              &#128533;
              <input
                type='radio'
                name='mood'
                value='2'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 2}
              ></input>
            </label>
            <label className="mood-radio-button mood-3">
              &#128528;
              <input
                type='radio'
                name='mood'
                value='3'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 3}
              ></input>
            </label>
            <label className="mood-radio-button mood-4">
              &#128522;
              <input
                type='radio'
                name='mood'
                value='4'
                onClick={clickSubmit}
                defaultChecked={currentMood?.mood === 4}
              ></input>
            </label>
            <label className="mood-radio-button mood-5">
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
      </div>
    );
  } else {
    return (
      <div className='mood-tracker'>
        <div>
          <button onClick={handleEdit}>
            <AiFillEdit />
          </button>
        </div>
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
      </div>
    );
  }
};

export default connect(mSTP, mDTP)(MoodTracker);
