import React from 'react'

const GoalsWidgetItem = ({goal, handleButtonClick, openEditForm}) => {
  return (
    <div key={goal._id}>
      <p>{goal.title}</p>
      <p>{goal.description}</p>
      <p>{goal.dueDate ? (new Date(goal.dueDate).toDateString()) : ''}</p>

      <button onClick={handleButtonClick}>Done?</button>
      <button onClick={() => openEditForm(goal)}>Edit</button>
    </div>
  )
}

export default GoalsWidgetItem
