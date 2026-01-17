/* eslint-disable react-refresh/only-export-components */

import { App } from "antd";
import { onAuthStateChanged, type User } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { auth } from "../config/firebase";
import UserService from "../../services/user.service";
import type { IUserDao } from "../dao/user.dao";

interface IUserContext {
  user: User | null;
  userData: IUserDao | null;
  authId?: string;
  loading: boolean;
  error: string | null;
}

export const UserContext = createContext<IUserContext | null>(null);

export const useUserState = () => {
  const state = useContext(UserContext);
  if (!state) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return {
    ...state,
  };
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<IUserDao | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { message } = App.useApp();

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(
      auth,
      async (user) => {
        setUser(user);

        if (user) {
          try {
            setLoading(true);
            const fetchUserData = await UserService.getUserFromAuthId(user.uid);
            setUserData(fetchUserData);
          } catch (error) {
            console.error("Error fetching user data:", error);
            setError("Error fetching user data");
            message.error("Failed to load user data. Please try again.");
          } finally {
            setLoading(false);
          }
        } else {
          setUserData(null);
          setLoading(false);
        }
      },
      (error) => {
        console.error("Error observing auth state:", error);
        setError("Error observing auth state");
        message.error("Authentication error. Please try again.");
      }
    );

    return () => {
      unsubscribeFromAuth();
    };
  }, [message]);

  useEffect(() => {});

  const contextValue = useMemo(
    () => ({
      user,
      error,
      authId: user?.uid,
      userData,
      loading,
    }),
    [user, error, userData, loading]
  );
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
