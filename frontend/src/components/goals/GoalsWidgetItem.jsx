import React from 'react'

const GoalsWidgetItem = ({goal, handleButtonClick, openEditForm}) => {
  return (
    <div
      key={goal._id}
      className="goals-widget-item"
    >
      <div className="goals-widget-info">
        <h5>{goal.title}</h5>
        <p>{goal.description}</p>
        <p>{goal.dueDate ? (new Date(goal.dueDate).toDateString()) : ''}</p>

      </div>
      <div className="goals-widget-btns">
        <button onClick={handleButtonClick}>Done?</button>
        <button onClick={() => openEditForm(goal)}>Edit</button>
      </div>
    </div>
  )
}

export default GoalsWidgetItem
