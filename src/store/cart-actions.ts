import { Dispatch } from '@reduxjs/toolkit';

import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';
import { ICartSlice } from './store-interfaces';

const url = 'https://reduxcart-b32e8-default-rtdb.europe-west1.firebasedatabase.app/cart.json';

export const fetchCartData = () => async (dispatch: Dispatch) => {
  const fetchData = async () => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Could not fetch cart data!');
    }

    return await response.json();
  };

  try {
    const cartData = await fetchData();
    dispatch(cartActions.replaceCart({
      items: cartData.items || [],
      totalQuantity: cartData.totalQuantity
    }));
  } catch (_e) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      }),
    );
  }
};

export const sendCartData = (cart: ICartSlice) => async (dispatch: Dispatch) => {
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }),
  );

  const sendRequest = async () => {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
    });

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
