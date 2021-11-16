import React from 'react';

const JournalItem = ({openEditForm, journal}) => {
  return <li className="day-show-journal-item">
    <div>{journal.created_at}</div>
    <div>{journal.entry}</div>
    <button onClick={() => openEditForm(journal)}>Edit Entry</button>
  </li>
}

export default JournalItem;
