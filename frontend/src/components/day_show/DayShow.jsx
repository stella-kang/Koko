import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDayShow } from '../../actions/day_show_actions';
import Calendar from 'react-calendar';
import DayShowDetail from './DayShowDetail'

const mSTP = (state, ownProps) => ({
  dayShow: state.entities.dayShow,
  currentUserId: state.session.user.id
})

const mDTP = (dispatch, ownProps) => ({
  fetchDayShow: (userId, date) => dispatch(fetchDayShow(userId, date))
})

const DayShow = ({fetchDayShow, currentUserId, dayShow}) => {
  const [calDate, setCalDate] = useState(new Date());

  useEffect(() => {
    fetchDayShow(currentUserId, new Date().toLocaleDateString().split('/')[0]);
  }, [fetchDayShow, calDate, currentUserId])

  const onChange = (date) => {
    setCalDate(date);
  }

  return <div className="day-show-calendar">
    <DayShowDetail dayShow={dayShow}/>
    <Calendar onChange={onChange} value={calDate}/>
  </div>
}

export default connect(mSTP, mDTP)(DayShow);
