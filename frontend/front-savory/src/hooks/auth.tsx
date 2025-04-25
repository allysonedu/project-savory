"use client";

import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";

import { login } from "@/api/savory-api";

import { ILogin, IUser } from "@/dtos";

interface SignInCredencials {
  email: string;
  password: string;
}

interface IUserResponseProps {
  user: IUser;
}

interface AuthContextData {
  user: IUser;
  token: string;
  signIn(credentials: SignInCredencials): Promise<IUserResponseProps | null>;
  signOut(): void;
  updateUser(user: IUser): void;
}

interface AuthProps {
  children: React.ReactNode;
}

const APP_NAME = process.env.APP_NAME as string;

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [data, setData] = useState<ILogin>({} as ILogin);

  useEffect(() => {
    const payload = localStorage.getItem(APP_NAME);

    if (payload) {
      const parsedPayload = JSON.parse(payload);
      const { token, user } = parsedPayload;

      setData({ token, user });
    }
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredencials) => {
    const result = await login(email, password);
    localStorage.setItem(APP_NAME, JSON.stringify(result));

    setData(result);

    setData(result);

    return result;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(APP_NAME);

    setData({} as ILogin);
  }, []);

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem(
        APP_NAME,
        JSON.stringify({
          token: data.token,
          user,
        })
      );
      setData({
        token: data.token,
        user,
      });
    },
    [data.token]
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
