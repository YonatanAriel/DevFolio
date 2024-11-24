import { notFound } from "next/navigation";
import { createFormData } from "./formData";
import getUrl from "./getUrl";
import { apiRequest } from "./apiRequest";

export const sendSignUpData = async (data) => {
  const formData = createFormData(data);
  const options = {
    method: "POST",
    body: formData,
  };
  const response = await apiRequest("/api/users/signUp", options);

  return response;
};

export const sendSignInData = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await apiRequest(`/api/users/signIn`, options);
  return response;
};

export const getAllUsers = async () => {
  const response = await apiRequest(`/api/users`, {
    next: { revalidate: 0 },
  });
  return response;
};

export const getUser = async (id) => {
  const response = await apiRequest(`/api/users/?id=${id}`, {
    next: { revalidate: 20 },
  });
  if (!response) notFound();
  return response;
};

export const getUserByToken = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await apiRequest(`/api/users/profile`, {
    next: { revalidate: 0 },
    headers,
  });

  return response;
};

export const getAllProjects = async () => {
  const response = await apiRequest("/api/projects", {
    cache: "no-store",
  });
  return response;
};

export const addProject = async (projectData, token) => {
  const formData = createFormData(projectData);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = {
    method: "POST",
    headers,
    body: formData,
  };

  const response = await apiRequest(`/api/projects/addProject`, options);
  if (response === null) return "error";
  else return "success";
};

export const getUserProjects = async (id) => {
  const response = await apiRequest(`/api/projects/user?id=${id}`);
  return response;
};

export const search = async (text) => {
  const options = {
    method: "POST",
    body: JSON.stringify(text),
  };
  const response = apiRequest(`/api/search`, options);
  return response;
};

export const updateDetails = async (details, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const formData = createFormData(details);
  const options = {
    method: "POST",
    body: formData,
    headers,
  };
  const response = await apiRequest(`/api/users/updateDetails`, options);
  return response;
};

//possible solution for unable to pars url
/*async function getData() {
  const res = await import("../api/top-rated/route");  <---- this is the location of my api file

  return await (await res.GET()).json();
}*/
