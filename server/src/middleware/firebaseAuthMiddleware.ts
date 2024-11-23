import admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
  user: admin.auth.DecodedIdToken;
}

// Middleware to verify Firebase Authentication token
export const firebaseAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  console.log('authHeader', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Attach the decoded token to the request object
    (req as AuthRequest).user = decodedToken;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Error verifying Firebase token:', error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
