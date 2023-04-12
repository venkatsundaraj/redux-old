// import React from "react";

import cartSlice from "./cart";

import { configureStore } from "@reduxjs/toolkit";
import CartItemReducer from "./cart-items";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartItem: CartItemReducer.reducer,
  },
});

export default store;
