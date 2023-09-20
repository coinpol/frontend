import { createSlice } from "@reduxjs/toolkit";


const initialState={
    drawer:'dashboard'
};

const savedState = JSON.parse(localStorage.getItem('drawerState'));
const defaultState = savedState || initialState;



const drawerSlice = createSlice({
    name:'menu',
    initialState:defaultState,
    
        reducers: {
            drawer: (state,action) => {
          state.drawer=action.payload;
          localStorage.setItem('drawerState', JSON.stringify(state));
            },
    
        },
    
});

export const {  drawer } = drawerSlice.actions;
export default drawerSlice.reducer;