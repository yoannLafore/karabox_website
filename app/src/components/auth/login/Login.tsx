import CreateAccountButton from './create_account/CreateAccountButton';
import EmailLogin from './email_login/EmailLogin';
import GoogleLoginButton from './GoogleLoginButton';
import styles from './Login.module.scss';

interface LoginProps {
  onLoginSuccess: () => void;
}

function Login({ onLoginSuccess }: LoginProps) {
  return (
    <div className={styles['login-menu']}>
      <h2>Welcome back</h2>
      <GoogleLoginButton onLoginSuccess={onLoginSuccess} />
      <span className={styles['separator']}>or</span>
      <EmailLogin onLoginSuccess={onLoginSuccess} />
      <CreateAccountButton />
    </div>
  );
}

export default Login;
