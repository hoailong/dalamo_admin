import { toast } from "react-toastify";
import axios from "../../../utils/axiosClient";

const { createSlice } = require("@reduxjs/toolkit");

const initState = {
    modalState: true,
};

const login = createSlice({
    name: "login",
    initialState: initState,
    reducers: {
        openModal: (state, action) => {
            state.modalState = true;
        },
        closeModal: (state, action) => {
            state.modalState = false;
        },
    },
});

const { reducer, actions } = login;
export const { openModal, closeModal} = actions;


export default reducer;
