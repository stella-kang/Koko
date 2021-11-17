import LoginForm from '../session/LoginForm';

const LoginFormModal = ({ closeModal, history }) => {
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
