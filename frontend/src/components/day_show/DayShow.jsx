import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../../actions/history_actions';
import Calendar from 'react-calendar';
import DayShowDetail from './DayShowDetail'

const mSTP = (state, ownProps) => ({
  history: state.entities.history,
  currentUserId: state.session.user.id
})

const mDTP = (dispatch, ownProps) => ({
  fetchHistory: (userId, date) => dispatch(fetchHistory(userId, date))
})

const DayShow = ({fetchHistory, currentUserId, history}) => {
  const [calDate, setCalDate] = useState(new Date());

  useEffect(() => {
    fetchHistory(currentUserId, new Date().toLocaleDateString().split('/')[0]);
  }, [fetchHistory, calDate, currentUserId])

  const onChange = (date) => {
    setCalDate(date);
  }

  return <div className="history-calendar">
    <DayShowDetail history={history}/>
    <Calendar onChange={onChange} value={calDate}/>
  </div>
}

export default connect(mSTP, mDTP)(DayShow);
