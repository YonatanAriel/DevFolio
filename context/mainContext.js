"use client";
import { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("devFolioToken");
    if (tokenFromLocalStorage) setToken(tokenFromLocalStorage);
  }, []);

  return (
    <MainContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
