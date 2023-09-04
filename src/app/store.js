import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { authSlice } from '../features/slices/AuthSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
  },
});
