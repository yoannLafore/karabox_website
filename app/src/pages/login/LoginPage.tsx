import Login from '../../components/auth/login/Login';

function LoginPage() {
  return (
    <div>
      <main>
        <Login onLoginSuccess={() => (window.location.href = '/')} />
      </main>
    </div>
  );
}

export default LoginPage;
