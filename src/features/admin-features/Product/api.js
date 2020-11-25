import Axios from "axios";

const { default: axiosClient } = require("../../../utils/axiosClient");

const productAPI = {
  getAll: (params) => {
    const url = "/product";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `product/${id}`;
    return axiosClient.get(url);
  },

  create: (data) => {
    const url = `product/`;
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axiosClient.post(url, data, config);
  },

  update: (id, data) => {
    const url = `product/${id}`;
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axiosClient.post(url, data, config);
  },

  delete: (id) => {
    const url = `product/${id}`;
    return axiosClient.delete(url);
  },
};

export default productAPI;
