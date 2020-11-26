const { default: axiosClient } = require("../../utils/axiosClient");

const userAPI = {
  getAll: (params) => {
    const url = "/user";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `user/${id}`;
    return axiosClient.get(url);
  },

  create: (user) => {
    const url = `user/`;
    return axiosClient.post(url, user);
  },

  update: (user) => {
    const url = `user/${user.id}`;
    return axiosClient.put(url, user);
  },

  delete: (id) => {
    const url = `user/${id}`;
    return axiosClient.delete(url);
  },
};

export default userAPI;
