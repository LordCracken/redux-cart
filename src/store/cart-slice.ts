import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { uiActions } from './ui-slice';
import { ICartSlice } from './store-interfaces';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  } as ICartSlice,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;

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

export const sendCartData = (cart: ICartSlice) => async (dispatch: Dispatch) => {
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }),
  );

  const sendRequest = async () => {
    const url = 'https://reduxcart-b32e8-default-rtdb.europe-west1.firebasedatabase.app/cart.json';
    const response = await fetch(url, { method: 'PUT', body: JSON.stringify(cart) });

    if (!response.ok) {
      throw new Error('Sending cart data failed!');
    }
  };

  try {
    await sendRequest();

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }),
    );
  } catch (_e) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }),
    );
  }
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
