import React from 'react';
import { connect } from 'react-redux';
import { deleteReflection } from '../../actions/reflections_actions';
import { useListenForModalClose } from '../../util/custom_hooks';
import { MdCancelPresentation } from 'react-icons/md';

const mapDispatchToProps = {
  deleteReflection,
};

const DeleteReflectionModal = ({
  reflection,
  closeForm,
  closeModal,
  deleteReflection,
}) => {
  useListenForModalClose(closeModal);

  const handleDelete = () => {
    deleteReflection(reflection._id).then(() => {
      closeModal();
      closeForm();
    });
  };

  return (
    <div className='modal'>
      <div className='reflection-modal-container'>
        <div className='close-btn-container'>
          <button onClick={closeModal}>
            <MdCancelPresentation />
          </button>
        </div>

        <h3>Are you sure you want to delete this reflection?</h3>
        <div className='delete-reflection-container'>
          <p>{reflection.entry}</p>
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

export default connect(null, mapDispatchToProps)(DeleteReflectionModal);
