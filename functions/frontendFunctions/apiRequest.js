import getUrl from "./getUrl";

export const apiRequest = async (relativeUrl, options = {}) => {
  try {
    const baseUrl = getUrl();
    const URL = `${baseUrl}${relativeUrl}`;

    const response = await fetch(URL, options);

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData.message);
      throw new Error(
        errorData.message || `Http error: status - ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
