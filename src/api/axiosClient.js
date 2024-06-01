import axios from "axios";

export const axiosClient = axios.create({ baseURL: "http://localhost:3000" });

export const login = async ({ email, password }) => {
  const response = await axiosClient.post("/users/login", { email, password });
  return response.data;
};
