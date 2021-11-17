import LoginForm from '../session/LoginForm';
import { useListenForModalClose } from '../../util/custom_hooks';

const LoginFormModal = ({ closeModal, history }) => {

  useListenForModalClose(closeModal);

  const postLogin = () => {
    closeModal();
    history.push('/home');
  }

  return (
    <div className="modal">

      <button onClick={closeModal}>Close</button>

      <LoginForm postLogin={postLogin} />
    </div>
  )
}

export default LoginFormModal
