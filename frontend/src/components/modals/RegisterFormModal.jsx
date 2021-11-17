import RegisterForm from '../session/RegisterForm';
import { useListenForModalClose } from '../../util/custom_hooks';
import { MdCancelPresentation } from 'react-icons/md';

const LoginFormModal = ({ closeModal, history }) => {
  useListenForModalClose(closeModal);

  const postRegister = () => {
    closeModal();
    history.push('/home');
  };

  return (
    <div className='modal'>
      <div className='close-btn-container'>
        <button className='register-close-btn' onClick={closeModal}>
          <MdCancelPresentation />
        </button>
      </div>

      <RegisterForm postRegister={postRegister} />
    </div>
  );
};

export default LoginFormModal;
