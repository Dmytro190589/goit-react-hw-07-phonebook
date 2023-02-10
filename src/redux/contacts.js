import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact } from "./operations";


const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const contacts = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        error: null,
        isLoading: false,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContacts.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [addContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items.push({ payload })
        },
        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            const index = state.items.findIndex(
                task => task.id === payload.id
            );
            state.items.splice(index, 1);
            state.error = null;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContacts.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
    }
})
export const contactsReducer = contacts.reducer;










// reducers: {
//     addContacts(state, action) {
//         const { name, number, id } = action.payload;
//         const inContact = state.find(e => e.name === name);
//         if (inContact) {
//             return alert(`${name} is already in contacts`)
//         } state.push({ name, number, id })
//     },
//     deleteContact(state, action) {
//         return state.filter(e => e.id !== action.payload)
//     }

// }