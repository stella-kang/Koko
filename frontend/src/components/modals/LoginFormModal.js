import LoginForm from '../session/LoginForm';
import { useListenForModalClose } from '../../util/custom_hooks';
import { MdCancelPresentation } from 'react-icons/md';

const LoginFormModal = ({ closeModal, history }) => {
  useListenForModalClose(closeModal);

  const postLogin = () => {
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

      <LoginForm postLogin={postLogin} />
    </div>
  );
};

export default LoginFormModal;
