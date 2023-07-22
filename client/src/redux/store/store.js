import { configureStore } from "@reduxjs/toolkit";
import uiControlReducer from '../reducers/uiSlice';
const store=configureStore({
    reducer:{
        uiControls:uiControlReducer
    }
})
export default store;