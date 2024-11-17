interface AuthButtonProps {
  label: string;
  onClick: () => void;
  loading?: boolean;
}

function LoginButton({ label, onClick, loading = false }: AuthButtonProps) {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? 'Loading...' : label}
    </button>
  );
}

export default LoginButton;
