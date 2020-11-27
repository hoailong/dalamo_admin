const { default: axiosClient } = require("../../utils/axiosClient");

const userAPI = {
  getData: (params) => {
    const url = "/dashboard";
    return axiosClient.get(url, { params });
  },
};

export default userAPI;
