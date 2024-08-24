import api from "@/config/apiInstance";

class ApiServices {
  // Auth
  signup(data, params) {
    return api.post(`/auth/signup`, data);
  }
}

export default new ApiServices();
