import axios from "axios";

const api = axios.create({
    baseURL: "https://assignment-projects-10-server.vercel.app",
});

export default api;