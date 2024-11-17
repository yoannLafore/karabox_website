import CreateAccountButton from './create_account/CreateAccountButton';
import EmailLoginButton from './email_login/EmailLoginButton';
import GoogleLoginButton from './GoogleLoginButton';

interface LoginProps {
  onLoginSuccess: () => void;
}

function Login({ onLoginSuccess }: LoginProps) {
  return (
    <div>
      <main>
        <GoogleLoginButton onLoginSuccess={onLoginSuccess} />
        <EmailLoginButton />
        <CreateAccountButton />
      </main>
    </div>
  );
}

export default Login;
