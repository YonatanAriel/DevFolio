export const sendSignUpData = async (data) => {
  const formData = new FormData();
  for (const name in data) {
    if (!data.hasOwnProperty(name)) return;
    if (Array.isArray(data[name])) {
      for (const item of data[name]) {
        formData.append(name, item);
      }
    } else {
      formData.append(name, data[name]);
    }
  }
  let response = "";
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/users/signUp`, {
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
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/users/signIn`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/users`, {
    next: { revalidate: 100 },
  });
  return res.json();
};
