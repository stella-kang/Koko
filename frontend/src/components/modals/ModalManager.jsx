import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import { closeModal }  from '../../actions/modal_actions';

export const ModalManager = ({ modal, closeModal }) => {
  let component;

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(modal);
    }
  }

  return (
    <CSSTransition
      in={modal.action === "open"}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames="modals">
      <div className="modal-container" onClick={handleClick}>
        { component }
      </div>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => ({
  modal: state.modal
})

const mapDispatchToProps = {
  closeModal
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalManager))
