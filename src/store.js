import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from './Pages/Home/Course/';


const store = configureStore({
    reducer: {
        CourseReducer: CourseReducer
    },
});

export default store;