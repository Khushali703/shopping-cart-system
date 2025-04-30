import { createSlice } from "@reduxjs/toolkit";
import DATA from "../data/data";

const itemsSlice = createSlice({
    name : "items",
    initialState: DATA,

    reducers : {
        addInitialItems : (state,action) => {
            return action.payload;
        }
    }
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;