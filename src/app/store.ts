import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../fetaures/LoginSlice";

const store = configureStore({
    reducer: {
        user: LoginReducer,
    }
})

export default store;