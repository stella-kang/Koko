import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { useListenForModalClose } from '../../util/custom_hooks';
import { MdCancelPresentation } from 'react-icons/md';

export const LogoutModal = ({ logout, closeModal }) => {
  useListenForModalClose(closeModal);

  return (
    <div className='modal'>
      <div className='goals-modal-container'>
        <div className='close-btn-container'>
          <button className='close-btn' onClick={closeModal}>
            <MdCancelPresentation />
          </button>
        </div>

        <h3>Are you sure you want to logout?</h3>

        <div className='delete-reflections-btns-container'>
          <button className='cancel-btn' onClick={() => closeModal()}>
            Cancel
          </button>
          <button className='delete-btn' onClick={() => logout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  logout
}

export default connect(null, mapDispatchToProps)(LogoutModal)
