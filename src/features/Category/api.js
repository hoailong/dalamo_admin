const { default: axiosClient } = require("../../utils/axiosClient");

const categoryAPI = {
  getAll: (params) => {
    const url = "/category";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `category/${id}`;
    return axiosClient.get(url);
  },

  create: (category) => {
    const url = `category/`;
    return axiosClient.post(url, category);
  },

  update: (category) => {
    const url = `category/${category.id}`;
    return axiosClient.put(url, category);
  },

  delete: (id) => {
    const url = `category/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryAPI;
