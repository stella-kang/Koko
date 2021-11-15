import { connect } from 'react-redux';
import React from 'react';
import { receiveMood } from '../../actions/mood_actions';

const mSTP = (state, ownProps) => ({
  currentMood: state.entitites.mood,
  currentUserId: state.session.currentUserId
})

const mDTP = (dispatch, ownProps) => ({
  addMood: (mood) => dispatch(addMood(mood)),
  deleteMood: (moodId) => dispatch(deleteMood(moodId)),
  editMood: (mood) => dispatch(editMood(mood))
})

export default connect(mSTP, mDTP)(MoodTracker);

const MoodTracker = (props) => {
  const [mood, setMood] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addMood({
      mood: mood,
      user_id: props.currentUserId
    })
  }

  const handleDelete = (e) => {
    props.deleteMood(props.mood.id);
  }

  const clickSubmit = (e) => {
    setMood(e.target.value)
    document.getElementById("mood-form-button").click();
  }

  if (props.currentMood) {
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
      <button onClick={handleDelete}>Edit Mood</button>
    </div>
  }
}
