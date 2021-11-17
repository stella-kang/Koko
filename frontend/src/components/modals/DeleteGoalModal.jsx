import React from 'react'
import { connect } from 'react-redux'
import { deleteGoal } from '../../actions/goal_actions'

const mapDispatchToProps = {
  deleteGoal
}

const DeleteGoalModal = ({ goal, closeForm, closeModal, deleteGoal }) => {

  const handleDelete = () => {
    deleteGoal(goal._id)
      .then(() => {
        closeModal();
        closeForm();
      });
  }

  return (
    <div className="modal">

      <button onClick={closeModal}>Close</button>

      <p>
        Are you sure you want to delete this goal?
      </p>

      <p>
        Goal: <span>{ goal.description }</span>
      </p>

      <button onClick={() => closeModal()}>
        Cancel
      </button>

      <button onClick={handleDelete}>
        Delete
      </button>

    </div>
  )
}

export default connect(null, mapDispatchToProps)(DeleteGoalModal)
