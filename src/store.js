import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/adminReducer';
import darkModeReducer from './reducers/darkModeReducer';
import DrawermenuReducer from './reducers/DrawermenuReducer';






const store = configureStore({
  reducer: 
  {
    admin:adminReducer, 
    darkmode:darkModeReducer,
    drawer:DrawermenuReducer,
 } 
});

export default store ;
