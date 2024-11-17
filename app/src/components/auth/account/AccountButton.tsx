import { Link } from 'react-router-dom';
import { useIsAuth } from '../../../hooks/auth/useAuth';
import { logout } from '../../../services/firebaseAuthService';

function SignInButton() {
  return (
    <Link to="/login">
      <button>Sign In</button>
    </Link>
  );
}

function LogoutButton() {
  return <button onClick={logout}>Logout</button>;
}

function AccountButton() {
  const isAuth = useIsAuth();

  return <div>{isAuth ? <LogoutButton /> : <SignInButton />}</div>;
}

export default AccountButton;
