import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts, editContacts } from './contactsOperations';


const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => { state.isLoading = true })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, (state) => { state.isLoading = true })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, (state) => { state.isLoading = true })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editContacts.pending, state => { state.isLoading = true })
      .addCase(editContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1, action.payload);
      })
      .addCase(editContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const contactsReducer = contactsSlice.reducer;