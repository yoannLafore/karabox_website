import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

/**
 * Login with Google
 * @returns {Promise<User>} - The authenticated user.
 */
export const loginWithGoogle = async (): Promise<User> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Google login failed:', error);
    throw error;
  }
};

/**
 * Login with Email and Password
 * @param email - User's email.
 * @param password - User's password.
 * @returns {Promise<User>} - The authenticated user.
 */
export const loginWithEmail = async (
  email: string,
  password: string,
): Promise<User> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error('Email login failed:', error);
    throw error;
  }
};

/**
 * Create an Account with Email and Password
 * @param email - User's email.
 * @param password - User's password.
 * @returns {Promise<User>} - The newly created user.
 */
export const createAccount = async (
  email: string,
  password: string,
): Promise<User> => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error('Account creation failed:', error);
    throw error;
  }
};

/**
 * Logout the current user
 * @returns {Promise<void>}
 */
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};
