import { createSlice } from "@reduxjs/toolkit";


const contacts = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContacts(state, action) {
            const { name, number, id } = action.payload;
            const inContact = state.find(e => e.name === name);
            if (inContact) {
                return alert(`${name} is already in contacts`)
            } state.push({ name, number, id })
        },
        deleteContact(state, action) {
            return state.filter(e => e.id !== action.payload)
        }

    }
})
export default contacts.reducer;
export const { addContacts, deleteContact } = contacts.actions;