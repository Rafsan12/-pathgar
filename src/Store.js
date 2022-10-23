import { configureStore } from "@reduxjs/toolkit";
import BookReducer from './Redux/Reducer/BookSlice';
import CourseReducer from './Pages/Redux/CourseSlice';
import ApiReducer from './Pages/Redux/ApiSlice';

const store = configureStore({
    reducer: {
        BookReducer: BookReducer,
        CourseReducer:CourseReducer,
        Api:ApiReducer
    },
});

export default store;
