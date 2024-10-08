import axios from "axios";

export default axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL: "http://10.255.254.112:3000",
  baseURL: "https://qubit.ae",
  headers: {
    Accept: "*/*",
    Authorization: "Bearer " + window.localStorage.getItem("qbt") || "",
  },
});
