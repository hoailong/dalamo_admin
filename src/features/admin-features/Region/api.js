const { default: axiosClient } = require("../../../utils/axiosClient");

const regionAPI = {
  getAll: (params) => {
    const url = "/regions";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `regions/${id}`;
    return axiosClient.get(url);
  },

  create: (region) => {
    const url = `regions/`;
    return axiosClient.post(url, region);
  },

  update: (region) => {
    const url = `regions/${region._id}`;
    return axiosClient.put(url, region);
  },

  delete: (id) => {
    const url = `regions/${id}`;
    return axiosClient.delete(url);
  },
};

export default regionAPI;
