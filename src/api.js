import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "e3d8a5949d9c5c031969bba0911a7dd2",
    language: "en-US",
  },
});

export default api;
