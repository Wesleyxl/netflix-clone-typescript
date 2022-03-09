import { apiFetchGet, apiFetchPost } from "./methods";

export const authRoutes = {
  login: async (email: string, password: string) => {
    const body = {
      email,

      password,
    };

    const response = apiFetchPost("/auth/login", body);

    return response;
  },

  me: async () => {
    const response = apiFetchGet("/auth/me");

    return response;
  },
};
