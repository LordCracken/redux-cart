import { createSlice } from '@reduxjs/toolkit';

import { ICartSlice } from './store-interfaces';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  } as ICartSlice,
  reducers: {
    replaceCart(state, action) {
      const { totalQuantity, items } = action.payload;
      state.totalQuantity = totalQuantity;
      state.items = items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, total: newItem.price });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.total -= existingItem.price;
          existingItem.quantity--;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
