import { configureStore } from "@reduxjs/toolkit";
import BookReducer from './Redux/Reducer/BookSlice';
import CourseReducer from './Pages/Redux/CourseSlice';

const store = configureStore({
    reducer: {
        BookReducer: BookReducer,
        CourseReducer: CourseReducer
    },
});

export default store;
