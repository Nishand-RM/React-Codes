import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "../features/counter/historySlice";
import counterReducer from "../features/counter/counterSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        history: historyReducer
    }
})

export default store;