import React from 'react';
import { createMood, editMood } from '../../actions/mood_actions';

const mSTP = (state, ownProps) => ({
  currentMood: state.entitites.mood,
  currentUserId: state.session.currentUserId,
})

const mDTP = (dispatch, ownProps) => ({
  createMood: (mood) => dispatch(createMood(mood)),
  editMood: (mood) => dispatch(editMood(mood))
})

export default connect(mSTP, mDTP)(MoodTracker);

const MoodTracker = (props) => {
  const [mood, setMood] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      props.editMood({
        mood: mood,
        user_id: props.currentUserId,
        id: props.currentMood.id
      })

      setEdit(false);
    } else {
      props.createMood({
        mood: mood,
        user_id: props.currentUserId
      })
    }
  }

  const handleEdit = (e) => {
    setEdit(true);
  }

  const clickSubmit = (e) => {
    setMood(e.target.value);
    document.getElementById("mood-form-button").click();
  }

  if (!props.currentMood || edit) {
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
      </form>
    </div>
  } else {
    <div className="mood-display">
      <div>Today's Mood:</div>
      {props.currentMood.mood === 5 ? <div>&#128513;</div> : props.currentMood.mood === 4 ? <div>&#128522;</div> : props.currentMood.mood === 3 ? <div>&#128528;</div> : props.currentMood.mood === 2 ? < div >&#128533;</div> : <div>&#128542;</div>}
      <button onClick={handleEdit}>Edit Mood</button>
    </div>
  }
}

export default MoodTracker;
