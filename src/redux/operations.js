import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://63e54fe5c04baebbcdb7dca4.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (contactObj, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { ...contactObj })
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
