import axios from "axios";
import { API_BASE_URI } from "@/utils/constants/serviceConfig";

const apiInstance = axios.create({
  baseURL: API_BASE_URI,
  headers: {
    "Content-Type": "application/json",
    // other default headers
  },
  // additional settings like timeouts
});

export default apiInstance;
