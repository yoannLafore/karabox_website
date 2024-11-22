interface AuthButtonProps {
  label: JSX.Element | string;
  onClick: () => void;
  loading?: boolean;
}

function LoginButton({ label, onClick, loading = false }: AuthButtonProps) {
  return (
    <button onClick={onClick} disabled={loading}>
      {label}
    </button>
  );
}

export default LoginButton;
