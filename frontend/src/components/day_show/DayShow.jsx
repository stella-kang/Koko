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
  const [reflectionToEdit, setReflectionToEdit] = useState(null);
  const [showEditReflection, setShowEditReflection] = useState(false);

  let fetchDate = `${calDate.getFullYear()}-${calDate.getUTCMonth() + 1}-${calDate.getDate()}`;

  const openEditForm = (reflection) => {
    setReflectionToEdit(reflection);
    setShowEditReflection(true);
  }

  useEffect(() => {
    fetchDayShow(currentUserId, fetchDate);
  }, [fetchDayShow, fetchDate, currentUserId])

  const onChange = (date) => {
    setCalDate(date);
  }

  const isToday = calDate.toLocaleDateString() === new Date().toLocaleDateString();

  if (showEditReflection) {
    return <div className="day-show">
      <ReflectionShowForm reflection={reflectionToEdit} closeForm={() => setShowEditReflection(false)}/>
      <Calendar onChange={onChange} value={calDate} />
    </div>
  } else {
    return <div className="day-show">
      <DayShowDetailContainer isToday={isToday} openEditForm={openEditForm} calDate={calDate} />
      <Calendar onChange={onChange} value={calDate} />
    </div>
  }
}

export default connect(mSTP, mDTP)(DayShow);
