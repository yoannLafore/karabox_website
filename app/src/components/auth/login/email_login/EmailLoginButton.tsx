import { useNavigate } from 'react-router-dom';
import LoginButton from '../../button/LoginButton';

function EmailLoginButton() {
  const navigate = useNavigate();

  const handleEmailLogin = () => {
    navigate('/login/email');
  };

  return <LoginButton label="Login with Email" onClick={handleEmailLogin} />;
}

export default EmailLoginButton;
