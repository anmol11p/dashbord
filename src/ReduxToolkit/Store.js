import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./TokenSlice"
const store=configureStore({
    reducer:{
        tokenReducer
    },
    devTools:true,
})

export default store;