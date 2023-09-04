import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  isToggle:true,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleOption: (state, action) => {
      console.log(" action.payload "+action.payload);
      state.isToggle=!action.payload;
      state.value=state.value;
      console.log(" state.isToggle "+state.isToggle);
      console.log(" state.value "+state.value);
      },
  },
  });

export const { toggleOption } = counterSlice.actions;
export default counterSlice.reducer;
