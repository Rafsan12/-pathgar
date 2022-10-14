import { configureStore } from "@reduxjs/toolkit";
import BookReducer from './redux/Reducer/BookSlice';

const store = configureStore({
    reducer: {
        BookReducer: BookReducer
    },
});

export default store;