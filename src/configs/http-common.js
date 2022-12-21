import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://localhost:5000/heartlink-dating-project/us-central1/app/`,
  headers: {
    Authorization: `Basic ${localStorage.getItem("accessToken")}`,
  },
});
