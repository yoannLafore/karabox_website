import { useState } from 'react';
import { loginWithEmail } from '../../../../services/firebaseAuthService';
import EmailField from '../../email/EmailField';

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
      setError('Login failed. Please check your email and password.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Email Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <EmailField
        onValidated={(email, password) => {
          handleLogin(email, password);
        }}
        validateLabel="Login"
        disabled={loading}
      />
    </div>
  );
}

export default EmailLogin;
