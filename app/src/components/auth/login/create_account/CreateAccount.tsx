import { useState } from 'react';
import EmailField from '../../email/EmailField';
import { createAccount } from '../../../../services/firebaseAuthService';
import styles from './CreateAccount.module.scss';
import { FirebaseError } from 'firebase/app';
import { getErrorMessage } from '../../../../services/firebaseErrorMessagesMap';

interface CreateAccountProps {
  onAccountCreated: () => void;
}

function CreateAccount({ onAccountCreated }: CreateAccountProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAccountCreation = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const user = await createAccount(email, password);
      console.log('Account created successfully:', user);
      onAccountCreated();
    } catch (err) {
      if (err instanceof FirebaseError) setError(getErrorMessage(err.code));
      else setError('Failed to create account. Please try again.');

      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles['signup-menu']}>
      <h2>Create an Account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <EmailField
        onValidated={handleAccountCreation}
        validateLabel={loading ? 'Creating Account...' : 'Sign up'}
        disabled={loading}
      />
    </div>
  );
}

export default CreateAccount;
