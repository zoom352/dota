import {configureStore} from "@reduxjs/toolkit";
import listReducer from "./reducers/listSlice";

export const store = configureStore({
    reducer: {
        list: listReducer,
    },
})
