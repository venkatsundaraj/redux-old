import { createSlice } from "@reduxjs/toolkit";
import { cartActions } from "./cart";

const initialCartItemState = {
  items: [],
  totalAmount: 0,
  changed: false,
};

const CartItemReducer = createSlice({
  name: "cart-item",
  initialState: initialCartItemState,
  reducers: {
    replaceCart(state, action) {
      // console.log(action);
      // state.totalAmount = action.payload.newTotalQuantity;
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
      console.log(initialCartItemState);
    },
    addItemHandler(state, action) {
      const newItem = action.payload;
      state.changed = true;

      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      state.totalAmount++;
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemHandler(state, action) {
      const id = action.payload;

      state.totalAmount--;
      state.changed = true;
      const existingItem = state.items.find((item) => item.itemId === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const CartItemActions = CartItemReducer.actions;
export default CartItemReducer;
