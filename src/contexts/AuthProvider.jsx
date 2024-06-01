import { createContext, useEffect, useState } from "react";
import { axiosClient } from "../api/axiosClient";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      localStorage.removeItem("token");
      delete axiosClient.defaults.headers.common.Authorization;
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
