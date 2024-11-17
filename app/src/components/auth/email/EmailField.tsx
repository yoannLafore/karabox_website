import { useState } from 'react';

interface EmailFieldProps {
  onValidated: (email: string, password: string) => void;
  validateLabel: string;
  disabled?: boolean;
}

function EmailField({ onValidated, validateLabel, disabled }: EmailFieldProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>
      </div>
      <button onClick={() => onValidated(email, password)} disabled={disabled}>
        {validateLabel}
      </button>
    </div>
  );
}

export default EmailField;
