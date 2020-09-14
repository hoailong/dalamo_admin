const { default: axiosClient } = require("../../../utils/axiosClient");

const userAPI = {
  getAll: (params) => {
    // const url = "/users";
    // return axiosClient.get(url, { params });
    return [
      {
        id: "xD",
        fullname: "abc",
        email: "email",
        gender: "gender",
        role: "role",
      },
    ];
  },

  get: (id) => {
    const url = `users/${id}`;
    return axiosClient.get(url);
  },
};

export default userAPI;
