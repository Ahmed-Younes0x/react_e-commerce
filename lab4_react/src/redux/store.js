import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cart_slice.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});