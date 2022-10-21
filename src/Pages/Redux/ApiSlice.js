import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchCourse = createAsyncThunk('course/fetchCourse', async() =>{
    const response = await axios.get('course.json')
        .catch((error) =>{
            console.log(error);
        });
        console.log(response);

    // return res.data
});

const ApiSlice = createSlice({
    name: 'Courses',
    initialState:{
        isLoading: false,
        courses:[],
        error:null,  
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchCourse.pending,(state) =>{
            state.isLoading = true;
        });
        builder.addCase(fetchCourse.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.courses = action.payload
            state.error = null
        });
        builder.addCase(fetchCourse.rejected,(state,action) =>{
            state.isLoading = false;
            state.courses =[];
            state.error = action.error.message;
        });

    },

});

export default ApiSlice.reducer;