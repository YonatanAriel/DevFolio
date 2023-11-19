export const validateSignInData = (data, setErrorMessage) => {
  if (data.password.trim().length < 6) {
    setErrorMessage("Password must contain at least 6 characters.");
    return false;
  } else if (data.email.trim().length < 3) {
    setErrorMessage("Email must contain at least 3 characters.");
    return false;
  }
  return true;
};

export const validateSignUpData = (data, setErrorMessage) => {
  if (data.password.trim().length < 6) {
    setErrorMessage("Password must contain at least 6 characters.");
    return false;
  }
  if (!(data.password === data.confirmPassword)) {
    setErrorMessage("Passwords do not match");
    return false;
  }
  const inputFields = [
    "name",
    "occupation",
    "about",
    "email",
    "confirmPassword",
  ];
  for (const fieldName of inputFields) {
    if (data[fieldName].length < 3) {
      setErrorMessage(`${fieldName} field must contain at least 3 characters.`);
      return false;
    }
  }
  return true;
};

export const validateUpdatedDetails = (details, setErrorMessage) => {
  for (const key of Object.keys(details)) {
    if (details[key].length < 3) {
      setErrorMessage(
        `The field ${key} must contain at least three characters`
      );
      return false;
    }
  }
  return true;
};
