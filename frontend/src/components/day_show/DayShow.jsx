import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDayShow } from '../../actions/day_show_actions';
import Calendar from 'react-calendar';
import DayShowDetailContainer from './DayShowDetailContainer';
import ReflectionShowForm from '../reflections/ReflectionShowForm';

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.user.id
})

const mDTP = (dispatch, ownProps) => ({
  fetchDayShow: (userId, date) => dispatch(fetchDayShow(userId, date))
})

const DayShow = ({fetchDayShow, currentUserId, moods, goals, reflections}) => {
  const [calDate, setCalDate] = useState(new Date());
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionId, setReflectionId] = useState();

  let fetchDate = `${calDate.getFullYear()}-${calDate.getUTCMonth() + 1}-${calDate.getDate()}`;

  const openReflectionShow = (reflectionId) => {
    setReflectionId(reflectionId);
    setShowReflection(true);
  }

  useEffect(() => {
    fetchDayShow(currentUserId, fetchDate);
  }, [fetchDayShow, fetchDate, currentUserId])

  const onChange = (date) => {
    setCalDate(date);
  }

  const isToday = calDate.toLocaleDateString() === new Date().toLocaleDateString();

  if (showReflection) {
    return <div className="day-show">
      <ReflectionShowForm closeForm={() => setShowReflection(false)} reflectionId={reflectionId} openReflectionShow={openReflectionShow} />
      <Calendar onChange={onChange} value={calDate} />
    </div>
  } else {
    return <div className="day-show">
      <DayShowDetailContainer isToday={isToday} openReflectionShow={openReflectionShow} calDate={calDate} />
      <Calendar onChange={onChange} value={calDate} />
    </div>
  }
}

export default connect(mSTP, mDTP)(DayShow);
