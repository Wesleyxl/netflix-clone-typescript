import { auth } from "../Api";

export const isAuthenticated = () => localStorage.getItem("token") !== null;

export const getToken = () => localStorage.getItem("token");

export const login = async (access_token: string) => {
  localStorage.setItem("token", access_token);

  const response = await auth.me();

  localStorage.setItem("user", response);
};

export const logout = () => {
  localStorage.removeItem("id");

  localStorage.removeItem("token");

  localStorage.removeItem("user");
};

export const validateToken = async (status: string) => {
  if (status === "Token is Invalid" || status === "Token is Expired") {
    window.location.href = "/logout";
  }
};
