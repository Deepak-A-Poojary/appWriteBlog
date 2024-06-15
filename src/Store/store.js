import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Store/authSlice.js'


const store = configureStore({
  reducer: authReducer
});

export default store;