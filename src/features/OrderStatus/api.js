const { default: axiosClient } = require("../../utils/axiosClient");

const orderStatusAPI = {
  getAll: (params) => {
    const url = "/order-status";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `order-status/${id}`;
    return axiosClient.get(url);
  },

  create: (orderStatus) => {
    const url = `order-status/`;
    return axiosClient.post(url, orderStatus);
  },

  update: (orderStatus) => {
    const url = `order-status/${orderStatus.id}`;
    return axiosClient.put(url, orderStatus);
  },

  delete: (id) => {
    const url = `order-status/${id}`;
    return axiosClient.delete(url);
  },
};

export default orderStatusAPI;
