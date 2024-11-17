import { useNavigate } from 'react-router-dom';
import LoginButton from '../../button/LoginButton';

function CreateAccountButton() {
  const navigate = useNavigate();

  const handleAccountCreation = () => {
    navigate('/create-account');
  };

  return (
    <LoginButton label="Create an account" onClick={handleAccountCreation} />
  );
}

export default CreateAccountButton;
