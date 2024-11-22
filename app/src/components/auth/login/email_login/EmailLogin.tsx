import { useState } from 'react';
import { loginWithEmail } from '../../../../services/firebaseAuthService';
import EmailField from '../../email/EmailField';
import styles from './EmailLogin.module.scss';
import { getErrorMessage } from '../../../../services/firebaseErrorMessagesMap';
import { FirebaseError } from 'firebase/app';

interface EmailLoginProps {
  onLoginSuccess: () => void; // Callback when login is successful
}

function EmailLogin({ onLoginSuccess }: EmailLoginProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginWithEmail(email, password);
      console.log('Logged in user:', user);
      onLoginSuccess();
    } catch (err) {
      if (err instanceof FirebaseError) setError(getErrorMessage(err.code));
      else setError('Failed to sign in. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles['email-login']}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <EmailField
        onValidated={(email, password) => {
          handleLogin(email, password);
        }}
        validateLabel="Sign in"
        disabled={loading}
      />
    </div>
  );
}

export default EmailLogin;
