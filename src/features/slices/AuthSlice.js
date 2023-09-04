import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  isToggle1111:true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    toggle: (state,action) => {      
      console.log(" toggle button clicked "+action.payload);
      state.isToggle=action.payload;
    },   
  },
});

export const { toggle } = authSlice.actions;

export default authSlice.reducer;
