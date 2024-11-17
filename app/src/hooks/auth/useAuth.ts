import React from 'react';
import { AuthContext } from '../../context/AuthContext';

function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

function useIsAuth() {
  const { user } = useAuth();
  return user !== null;
}

export { useAuth, useIsAuth };
