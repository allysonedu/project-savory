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

export { login };
