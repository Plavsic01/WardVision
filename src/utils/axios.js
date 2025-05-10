import axios from "axios";

const riotInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
});

export { riotInstance };
