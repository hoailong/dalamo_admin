import userAPI from "./api";

const { createSlice } = require("@reduxjs/toolkit");

const initialUser = {
  users: [],
  isLoading: false,
  isError: null,
};

const user = createSlice({
  name: "users",
  initialState: initialUser,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      return state;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
      return state;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      return state;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      return state;
    },
  },
});

const { reducer, actions } = user;
export const { setIsLoading, setIsError, setUsers, addUser } = actions;
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await userAPI.getAll();
      dispatch(setUsers(data));
      dispatch(setIsLoading(false));
      dispatch(setIsError(null));
    } catch (err) {
      console.log(err);
      dispatch(setIsError(err.message));
    }
  };
};
export default reducer;
