import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDayShow } from '../../actions/day_show_actions';
import Calendar from 'react-calendar';
import DayShowDetail from './DayShowDetail';
import UpdateReflectionContainer from '../reflections/UpdateReflectionContainer';

const mSTP = (state, ownProps) => ({
  dayShow: state.entities.dayShow,
  currentUserId: state.session.user.id
})

const mDTP = (dispatch, ownProps) => ({
  fetchDayShow: (userId, date) => dispatch(fetchDayShow(userId, date))
})

const DayShow = ({fetchDayShow, currentUserId, dayShow}) => {
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
  }, [fetchDayShow, dayShow, calDate, currentUserId])

  const onChange = (date) => {
    setCalDate(date);
  }

  if (showEditReflection) {
    return <div className="day-show">
      <UpdateReflectionContainer reflection={reflectionToEdit} closeForm={() => setShowEditReflection(false)}/>
      <Calendar onChange={onChange} value={calDate} />
    </div>
  } else {
    return <div className="day-show">
      <DayShowDetail openEditForm={openEditForm} dayShow={dayShow} />
      <Calendar onChange={onChange} value={calDate} />
    </div>
  }
}

export default connect(mSTP, mDTP)(DayShow);
