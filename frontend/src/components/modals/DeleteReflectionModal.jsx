import React from 'react';
import { connect } from 'react-redux';
import { deleteReflection } from '../../actions/reflections_actions';
import { useListenForModalClose } from '../../util/custom_hooks';

const mapDispatchToProps = {
  deleteReflection
}

const DeleteReflectionModal = ({ reflection, closeForm, closeModal, deleteReflection }) => {

  useListenForModalClose(closeModal);

  const handleDelete = () => {
    deleteReflection(reflection._id)
      .then(() => {
        closeModal();
        closeForm();
      });
  }

  return (
    <div className="modal">

      <button onClick={closeModal}>Close</button>

      <p>
        Are you sure you want to delete this reflection?
      </p>

      <h2>Reflection</h2>

      <p>{ reflection.entry }</p>

      <button onClick={() => closeModal()}>
        Cancel
      </button>

      <button onClick={handleDelete}>
        Delete
      </button>

    </div>
  )
}

export default connect(null, mapDispatchToProps)(DeleteReflectionModal)
