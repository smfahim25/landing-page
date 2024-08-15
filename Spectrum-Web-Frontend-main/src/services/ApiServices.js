import api from "@/config/apiInstance";
import { getQueryParams } from "@/utils/helpers/common";

class ApiServices {
  // Auth
  signup(data, params) {
    return api.post(`/auth/signup${getQueryParams(params)}`, data);
  }
}

export default new ApiServices();
