const { default: axiosClient } = require("../../utils/axiosClient");

const orderAPI = {
  getAll: (params) => {
    const url = "/order-receipt";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `order-receipt/${id}`;
    return axiosClient.get(url);
  },

  create: (order) => {
    const url = `order-receipt/`;
    return axiosClient.post(url, order);
  },

  update: (order) => {
    const url = `order-receipt/${order.id}`;
    return axiosClient.put(url, order);
  },

  delete: (id) => {
    const url = `order-receipt/${id}`;
    return axiosClient.delete(url);
  },
};

export default orderAPI;
