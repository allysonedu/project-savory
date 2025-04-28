import { api } from "../service/api";

const login = async (email: string, password: string) => {
  try {
    const result = await api.post("/login", {
      email,
      password,
    });
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

interface IUser {
  name: string;
  email: string;
  password: string;
}

const users = async (data: IUser) => {
  try {
    const result = await api.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user`,
      data
    );
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const forgotPassword = async (email: string) => {
  try {
    const result = await api.post(
      `${process.env.NEXT_PUBLIC_API_URL}/forgot-password`,
      {
        email,
      }
    );
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { login, users, forgotPassword };
