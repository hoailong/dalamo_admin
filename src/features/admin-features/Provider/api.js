const { default: axiosClient } = require("../../../utils/axiosClient");

const providerAPI = {
  getAll: (params) => {
    const url = "/provider";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `provider/${id}`;
    return axiosClient.get(url);
  },

  create: (provider) => {
    const url = `provider/`;
    return axiosClient.post(url, provider);
  },

  update: (provider) => {
    const url = `provider/${provider.id}`;
    return axiosClient.put(url, provider);
  },

  delete: (id) => {
    const url = `provider/${id}`;
    return axiosClient.delete(url);
  },
};

export default providerAPI;
