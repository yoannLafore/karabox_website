import { useState } from 'react';
import EmailField from '../../email/EmailField';
import { createAccount } from '../../../../services/firebaseAuthService';

interface CreateAccountProps {
  onAccountCreated: () => void;
}

function CreateAccount({ onAccountCreated }: CreateAccountProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleAccountCreation = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const user = await createAccount(email, password);
      console.log('Account created successfully:', user);
      setSuccess(true);
      onAccountCreated();
    } catch (err) {
      setError('Failed to create an account. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create an Account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && (
        <p style={{ color: 'green' }}>Account created successfully!</p>
      )}
      <EmailField
        onValidated={handleAccountCreation}
        validateLabel={loading ? 'Creating Account...' : 'Create Account'}
        disabled={loading}
      />
    </div>
  );
}

export default CreateAccount;
