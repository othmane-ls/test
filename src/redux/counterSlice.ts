// src/redux/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define initial state

interface PageName {
    componentName: string;
}

const initialState: PageName = {
  componentName: "Dashboard" // Default
};

const counterSlice = createSlice({
  name: 'page',    
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.componentName = action.payload;
    },
  },
});

// Export actions
export const { setValue } = counterSlice.actions;

// Export the reducer to be used in the store
export default counterSlice.reducer;
