import React from 'react';
import { connect } from 'react-redux';
import { deleteGoal } from '../../actions/goal_actions';
import { useListenForModalClose } from '../../util/custom_hooks';
import { MdCancelPresentation } from 'react-icons/md';

const mapDispatchToProps = {
  deleteGoal,
};

const DeleteGoalModal = ({ goal, closeForm, closeModal, deleteGoal }) => {
  useListenForModalClose(closeModal);

  const handleDelete = () => {
    deleteGoal(goal._id).then(() => {
      closeModal();
      closeForm();
    });
  };

  return (
    <div className='modal'>
      <div className='goals-modal-container'>
        <div className='close-btn-container'>
          <button className='close-btn' onClick={closeModal}>
            <MdCancelPresentation />
          </button>
        </div>

        <h3>Are you sure you want to delete this goal?</h3>
        <div className='delete-reflection-container'>
          <p className='goal-delete-desc'>
            Goal: <span>{goal.description}</span>
          </p>
        </div>
        <div className='delete-reflections-btns-container'>
          <button className='cancel-btn' onClick={() => closeModal()}>
            Cancel
          </button>
          <button className='delete-btn' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(DeleteGoalModal);
