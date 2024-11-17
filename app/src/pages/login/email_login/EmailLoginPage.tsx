import EmailLogin from '../../../components/auth/login/email_login/EmailLogin';

function EmailLoginPage() {
  return (
    <main>
      <EmailLogin
        onLoginSuccess={() => {
          window.location.href = '/';
        }}
      />
    </main>
  );
}

export default EmailLoginPage;
