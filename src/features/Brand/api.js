const { default: axiosClient } = require("../../utils/axiosClient");

const brandAPI = {
  getAll: (params) => {
    const url = "/brand";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `brand/${id}`;
    return axiosClient.get(url);
  },

  create: (brand) => {
    const url = `brand/`;
    return axiosClient.post(url, brand);
  },

  update: (brand) => {
    const url = `brand/${brand.id}`;
    return axiosClient.put(url, brand);
  },

  delete: (id) => {
    const url = `brand/${id}`;
    return axiosClient.delete(url);
  },
};

export default brandAPI;
