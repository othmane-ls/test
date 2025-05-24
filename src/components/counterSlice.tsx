import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    componentName: "Dashboard", // Default page
  },
  reducers: {
    setValue: (state, action) => {
      state.componentName = action.payload;
    },
  },
});

export const { setValue } = counterSlice.actions;
export default counterSlice.reducer;
