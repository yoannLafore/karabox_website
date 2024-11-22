import CreateAccount from '../../../components/auth/login/create_account/CreateAccount';

function CreateAccountPage() {
  return (
    <div>
      <CreateAccount onAccountCreated={() => (window.location.href = '/')} />
    </div>
  );
}

export default CreateAccountPage;
