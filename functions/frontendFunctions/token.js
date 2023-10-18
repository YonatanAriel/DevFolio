export const isTokenStored = () => {
  return localStorage.getItem("devFolioToken") !== null;
};
