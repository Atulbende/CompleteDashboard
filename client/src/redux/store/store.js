import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import uiControlReducer from '../reducers/uiSlice';
import { apiSlice } from "../../rtk/apiSlice";
const store=configureStore({
    reducer:{
        uiControls:uiControlReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;