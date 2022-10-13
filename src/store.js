import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from './Pages/Redux/CourseSlice';


const store = configureStore({
    reducer: {
        CourseReducer: CourseReducer
    },
});

export default store;