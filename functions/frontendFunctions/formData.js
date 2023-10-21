export const createFormData = (data) => {
  const formData = new FormData();
  for (const name in data) {
    if (!data.hasOwnProperty(name)) return;
    if (Array.isArray(data[name])) {
      formData.append(name, JSON.stringify(data[name]));
    } else {
      formData.append(name, data[name]);
    }
  }
  return formData;
};
