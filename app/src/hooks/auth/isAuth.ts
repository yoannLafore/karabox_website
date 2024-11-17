import { useAuth } from './useAuth';

function useIsAuth() {
  const { user } = useAuth();
  return user !== null;
}

export { useIsAuth };
