import { createSlice } from '@reduxjs/toolkit';
const initialCartState = {
    carts: []
};



export const CourseSlice = createSlice({

    name: "foodItem",
    initialState: initialCartState,
    reducers: {
        AddItem: (state, action) => {
            const ItemIndex = state.carts.findIndex((Item) => Item._id === action.payload.bid);

            if (ItemIndex >= 0) {

                state.carts[ItemIndex].quantity += 1
                void {
                    ...state,
                    carts: [...state.carts]
                }

            } else {
                const temp = { ...action.payload, quantity: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        },

        deleteItem: (state, action) => {

            const data = state.carts.filter((el) => el._id !== action.payload);

            return {
                ...state,
                carts: data
            }
        },

        DecreaseOne: (state, action) => {

            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam._id === action.payload._id);

            if (state.carts[IteamIndex_dec].quantity >= 1) {
                const dltiteams = state.carts[IteamIndex_dec].quantity -= 1

                void {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IteamIndex_dec].quantity === 1) {
                const data = state.carts.filter((el) => el._id !== action.payload);

                void {
                    ...state,
                    carts: data
                }
            }

        },


    }

});
export const { AddItem, deleteItem, DecreaseOne } =CourseSlice.actions;
export default CourseSlice.reducer;
