// src/reducers/adminReducer.js
import { createSlice } from '@reduxjs/toolkit';



const initialState =  {
  isLoggedIn: true,
  user: null,
  error: null,
};
// Import the library to access local storage
const savedState = JSON.parse(localStorage.getItem('adminState'));
const defaultState = savedState || initialState;





const adminSlice = createSlice({
  name: 'admin',
  initialState:defaultState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
      localStorage.setItem('adminState', JSON.stringify(state));
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload; // Set error message on login failure
      localStorage.setItem('adminState', JSON.stringify(state));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null; // Reset error state on logout
      localStorage.removeItem('adminState');  
    },
  },
});

export const { loginSuccess, loginFailure, logout } = adminSlice.actions;

export default adminSlice.reducer;
