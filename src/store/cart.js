import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isLoggedIn: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
