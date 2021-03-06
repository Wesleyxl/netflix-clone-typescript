import { BASE_URL } from "../env";

interface IBodyParams {
  email: string;

  password: string;
}

const access_token = localStorage.getItem("token");

export const apiFetchPublicGet = async (endpoint: string) => {
  const resp = await fetch(`${BASE_URL + endpoint}`, {
    method: "GET",

    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",
    },

    body: "",
  });

  const response = await resp.json();

  return response;
};

export const apiFetchGet = async (endpoint: string) => {
  const resp = await fetch(`${BASE_URL + endpoint}`, {
    method: "GET",

    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",

      Authorization: `Bearer ${access_token}`,
    },
  });

  const response = await resp.json();

  return response;
};

export const apiFetchPost = async (endpoint: string, body: IBodyParams) => {
  const resp = await fetch(`${BASE_URL + endpoint}`, {
    method: "POST",

    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",

      Authorization: `Bearer ${access_token}`,
    },

    body: JSON.stringify(body),
  });

  const response = await resp.json();

  return response;
};
