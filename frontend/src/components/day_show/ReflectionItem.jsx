import React from 'react';

const ReflectionItem = ({openEditForm, reflection}) => {
  return <li className="day-show-reflection-item">
    <div>{reflection.created_at}</div>
    <div>{reflection.entry}</div>
    <button onClick={() => openEditForm(reflection)}>Edit Entry</button>
  </li>
}

export default ReflectionItem;
