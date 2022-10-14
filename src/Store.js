import { configureStore } from "@reduxjs/toolkit";
import BookReducer from './Redux/Reducer/BookSlice';

const store = configureStore({
    reducer: {
        BookReducer: BookReducer
    },
});

export default store;