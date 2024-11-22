import { useState } from 'react';
import { loginWithGoogle } from '../../../services/firebaseAuthService';
import LoginButton from '../button/LoginButton';
import styles from './GoogleLoginButton.module.scss';

interface GoogleLoginProps {
  onLoginSuccess: () => void;
}

function GoogleLoginButton({ onLoginSuccess }: GoogleLoginProps) {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const user = await loginWithGoogle();
      console.log('Logged in user:', user);
      onLoginSuccess();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const label = (
    <div className={styles['button-label']}>
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google logo"
        className="google-icon"
      />
      <span>Sign in with Google</span>
    </div>
  );

  return (
    <div className={styles['google-sign-in-button']}>
      <LoginButton
        label={label}
        onClick={handleGoogleLogin}
        loading={loading}
      />
    </div>
  );
}

export default GoogleLoginButton;
