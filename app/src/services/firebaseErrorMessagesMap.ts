const firebaseErrorMessages: Record<string, string> = {
  'auth/invalid-email': 'The email address is invalid.',
  'auth/email-already-exists':
    'The email address is already in use by another account.',
  'auth/user-not-found': 'No user found with the provided credentials.',
  'auth/wrong-password': 'The password is incorrect. Please try again.',
  'auth/too-many-requests':
    'Too many requests. Please wait and try again later.',
  'auth/weak-password': 'The password is too weak. Please use a stronger one.',
  'auth/operation-not-allowed':
    'This operation is not allowed. Please contact support.',
  'auth/id-token-expired': 'Your session has expired. Please log in again.',
  'auth/network-request-failed':
    'Network error occurred. Please check your connection and try again.',
  'auth/invalid-credential': 'Invalid email or password.',
};

export const getErrorMessage = (errorCode: string): string => {
  return (
    firebaseErrorMessages[errorCode] ||
    'An unexpected error occurred. Please try again.'
  );
};
