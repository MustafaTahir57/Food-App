import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {  // Big reducer contains the small reducers
    cart: cartReducer, // small reducers for each slice
  },
});

export default appStore;
