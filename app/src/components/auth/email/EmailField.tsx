import { useState } from 'react';
import styles from './EmailField.module.scss';

interface EmailFieldProps {
  onValidated: (email: string, password: string) => void;
  validateLabel: string;
  disabled?: boolean;
}

function EmailField({ onValidated, validateLabel, disabled }: EmailFieldProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles['field-container']}>
      <div className={styles['email-field']}>
        <label className={styles['email-label']}>Email address</label>
        <input
          className={styles['email-input']}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className={styles['password-field']}>
        <label className={styles['password-label']}>Password</label>
        <input
          className={styles['password-input']}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <button onClick={() => onValidated(email, password)} disabled={disabled}>
        {validateLabel}
      </button>
    </div>
  );
}

export default EmailField;
