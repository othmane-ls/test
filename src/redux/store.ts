// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

// Example reducer (you can add more reducers as needed)
const rootReducer = {
  counterSlice
};

const store = configureStore({
  reducer: rootReducer,
});
  
export default store;
