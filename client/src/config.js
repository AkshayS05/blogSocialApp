import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://blog-social-app-nfrw.vercel.app/api/",
});
