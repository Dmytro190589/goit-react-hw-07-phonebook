import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return state = action.payload
        }
    }
})
 
export default filter.reducer;
export const {setFilter} = filter.actions;
