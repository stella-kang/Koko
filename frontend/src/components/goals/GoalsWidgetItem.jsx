import React from 'react'

const GoalsWidgetItem = ({goal, handleButtonClick}) => {
  return (
    <div key={goal._id}>
      <p>{goal.title}</p>
      <section>{goal.description}</section>
      <button onClick={handleButtonClick}>Done?</button>
    </div>
  )
}

export default GoalsWidgetItem
