import { notFound } from "next/navigation";
import { createFormData } from "./formData";
import getUrl from "./getUrl";

export const sendSignUpData = async (data) => {
  const formData = createFormData(data);
  // const URL = getUrl();

  let response = "";
  // await fetch(`${URL}/api/users/signUp`, {
  await fetch(`/api/users/signUp`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      response = data;
      console.error(data);
    })
    .catch((error) => {
      response = data;
      console.error("Error:", error);
    });
  return response;
};

export const sendSignInData = async (data) => {
  // const URL = getUrl();

  // return await fetch(`${URL}/api/users/signIn`, {
  return await fetch(`/api/users/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const getAllUsers = async () => {
  // const URL = getUrl();
  // const res = await fetch(`${URL}/api/users`, {
  const res = await fetch(`/api/users`, {
    next: { revalidate: 20 },
  });
  return await res.json();
};

export const getUser = async (id) => {
  // const URL = getUrl();

  // const res = await fetch(`${URL}/api/users/?id=${id}`, {
  const res = await fetch(`/api/users/?id=${id}`, {
    next: { revalidate: 20 },
  });
  if (!res.ok) notFound();
  return await res.json();
};

export const getUserByToken = async (token) => {
  // const URL = getUrl();

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const res = await fetch(`/api/users/profile`, {
    // const res = await fetch(`${URL}/api/users/profile`, {
    next: { revalidate: 0 },
    headers,
  });
  return await res.json();
};

export const getAllProjects = async () => {
  // const URL = getUrl();
  const res = await fetch(`/api/projects`, {
    // const res = await fetch(`${URL}/api/projects`, {
    cache: "no-store",
  });
  return await res.json();
};

export const addProject = async (projectData, token) => {
  try {
    // const URL = getUrl();
    const formData = createFormData(projectData);
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // let res = await fetch(`${URL}/api/projects/addProject`, {

    let res = await fetch(`/api/projects/addProject`, {
      method: "POST",
      headers,
      body: formData,
    });
    res = await res.json();
    if (res === "success") return "success";
    else return "error";
  } catch (err) {
    console.log(err);
  }
};

export const getUserProjects = async (id) => {
  // const URL = getUrl();

  // const res = await fetch(`${URL}/api/projects/user?id=${id}`).then((res) =>
  const res = await fetch(`/api/projects/user?id=${id}`).then((res) =>
    res.json()
  );
  return res;
};

export const search = async (text) => {
  const URL = getUrl();

  // return await fetch(`${URL}/api/search`, {
  return await fetch(`/api/search`, {
    method: "POST",
    body: JSON.stringify(text),
  }).then((res) => res.json());
};

export const updateDetails = async (details, token) => {
  // const URL = getUrl();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const formData = createFormData(details);

  // return await fetch(`${URL}/api/users/updateDetails`, {
  return await fetch(`/api/users/updateDetails`, {
    method: "POST",
    body: formData,
    headers,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
