import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

export const createAuthAccount = async (email: string, password: string) => {
  try {
    const userRecord = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userRecord;
  } catch (error) {
    const errorMessage = (error as Error).message;
    throw new Error(`Error creating user: ${errorMessage}`);
  }
};

export const loginAuthAccount = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    const errorMessage = (error as Error).message;
    throw new Error(`Error logging in user: ${errorMessage}`);
  }
};
