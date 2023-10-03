export const sendSignUpData = (data) => {
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
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}users/signUp`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};
