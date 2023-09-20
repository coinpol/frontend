import { createSlice } from "@reduxjs/toolkit";


const initialState={
    darkmode:false
};

const savedState = JSON.parse(localStorage.getItem('themeState'));
const defaultState = savedState || initialState;




const darkModeSlice = createSlice({
    name:'darkmode',
    initialState:defaultState,
    
        reducers: {
            darkModeOn: (state,action) => {
          state.darkmode=action.payload;
          localStorage.setItem('themeState', JSON.stringify(state));
            },
    
        },
    
});

export const { darkModeOn, darkModeOff} = darkModeSlice.actions;
export default darkModeSlice.reducer;