import {toast } from "react-toastify";
import axiosClient from "../../../../utils/axiosClient";
import { createSlice } from "@reduxjs/toolkit";

const initState = {
    hotProducts: [],
    newProducts: [],
    newArrivalProducts: [],
    isLoading: false,
};

const homePage = createSlice({
    name: "homePage",
    initialState: initState,
    reducers: {
        setHotProducts: (state, action) => {
            state.hotProducts = action.payload;
        },
        setNewProducts: (state, action) => {
            state.newProducts = action.payload;
        },
        setNewArrivalProducts: (state, action) => {
            state.newArrivalProducts = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

const { reducer, actions } = homePage;
export const { setHotProducts, setNewArrivalProducts, setNewProducts } = actions;

function fetchHotProducts(){
    return async dispatch => {
        
    }
}

export default reducer;