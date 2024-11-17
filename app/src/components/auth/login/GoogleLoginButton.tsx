import { useState } from 'react';
import { loginWithGoogle } from '../../../services/firebaseAuthService';
import LoginButton from '../button/LoginButton';

interface GoogleLoginProps {
  onLoginSuccess: () => void;
}

function GoogleLoginButton({ onLoginSuccess }: GoogleLoginProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginWithGoogle();
      console.log('Logged in user:', user);
      onLoginSuccess();
    } catch (err) {
      setError('Google login failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LoginButton
        label="Login with Google"
        onClick={handleGoogleLogin}
        loading={loading}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default GoogleLoginButton;
