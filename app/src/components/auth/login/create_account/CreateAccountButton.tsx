import { useNavigate } from 'react-router-dom';
import styles from './CreateAccountButton.module.scss';

function CreateAccountButton() {
  const navigate = useNavigate();

  const handleAccountCreation = () => {
    navigate('/create-account');
  };

  return (
    <div className={styles['signup-prompt']}>
      <span>Don't have an account yet?</span>
      <button onClick={handleAccountCreation} className={styles['signup-link']}>
        Create one!
      </button>
    </div>
  );
}

export default CreateAccountButton;
