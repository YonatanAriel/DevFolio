import { notFound } from "next/navigation";
import { createFormData } from "./formData";
import getUrl from "./getUrl";
import { apiRequest } from "./apiRequest";

export const sendSignUpData = async (data) => {
  const formData = createFormData(data);

  // let response = "";
  // await fetch(`${baseUrl}/api/users/signUp`, {
  //   method: "POST",
  //   body: formData,
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     response = data;
  //     console.error(data);
  //   })
  //   .catch((error) => {
  //     response = data;
  //     console.error("Error:", error);
  //   });
  // return response;
  const options = {
    method: "POST",
    body: formData,
  };
  const response = await apiRequest("/api/users/signUp", options);

  return response;
};

export const sendSignInData = async (data) => {
  // return await fetch(`/api/users/signIn`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((res) => {
  //     if (!res.ok) {
  //       return Promise.reject(res);
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     return data;
  //   });
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
    next: { revalidate: 20 },
  });
  return response;
};

export const getUser = async (id) => {
  // const res = await fetch(`/api/users/?id=${id}`, {
  //   next: { revalidate: 20 },
  // });
  // if (!res.ok) notFound();
  // return await res.json();
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

// export const getAllProjects = async () => {
// const URL = getUrl();
// const res = await fetch(`${URL}/api/projects`, {

//   try {
//     const baseUrl = getUrl();

//     console.log("Fetching from URL:", baseUrl);

//     const res = await fetch(`${baseUrl}/api/projects`, {
//       cache: "no-store",
//     });

//     if (!res.ok) throw new Error(`Http error: status - ${res.status}`);

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     throw error;
//   }
// };

export const getAllProjects = async () => {
  const response = await apiRequest("/api/projects", {
    cache: "no-store",
  });
  return response;
};

export const addProject = async (projectData, token) => {
  // try {
  //   const formData = createFormData(projectData);
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   let res = await fetch(`/api/projects/addProject`, {
  //     method: "POST",
  //     headers,
  //     body: formData,
  //   });
  //   res = await res.json();
  //   if (res === "success") return "success";
  //   else return "error";
  // } catch (err) {
  //   console.log(err);
  // }

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
  // const res = await fetch(`/api/projects/user?id=${id}`).then((res) =>
  //   res.json()
  // );
  // return res;
  const response = await apiRequest(`/api/projects/user?id=${id}`);
  return response;
};

export const search = async (text) => {
  // return await fetch(`/api/search`, {
  //   method: "POST",
  //   body: JSON.stringify(text),
  // }).then((res) => res.json());
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
