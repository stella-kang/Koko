import React, { useState } from 'react';
import Calendar from 'react-calendar';

const History = (props) => {
  const [calDate, setCalDate] = useState(new Date());
  // eslint-disable-next-line
  let filteredHistory;

  const onChange = (date) => {
    setCalDate(date);

    filteredHistory = props.history.filter(history => {
      const historyDate = new Date(history.created_at).toLocaleString().split(",")[0]
      const calDate = date.toLocaleString().split(",")[0]
      return historyDate === calDate;
    })
  }

  return <div className="history-calendar">
    <Calendar onChange={onChange} value={calDate}/>
  </div>
}

export default History;
