import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

const GoalsWidgetItem = ({goal, handleButtonClick, openEditForm}) => {
  return (
    <div
      key={goal._id}
      className="goals-widget-item"
    >
      <div className="goals-widget-info">
        <p className="goal-due-date">{goal.dueDate ? (new Date(goal.dueDate).toDateString()) : 'No Due Date'}</p>
        {/* <h5>{goal.title}</h5> */}
        <div className='goal-widget-desc-wrapper'>
          <p className="goal-widget-desc">{goal.description}</p>
        </div>
      </div>
      <div className="goals-widget-btns">
        <button onClick={() => openEditForm(goal)}>
          <AiFillEdit />
        </button>
        <button onClick={handleButtonClick}>
          <AiFillCheckCircle />
        </button>
      </div>
    </div>
  )
}

export default GoalsWidgetItem
