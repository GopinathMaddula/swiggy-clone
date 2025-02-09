import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice.ts";

export const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
