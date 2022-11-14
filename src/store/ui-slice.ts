import { createSlice } from '@reduxjs/toolkit';

import { IUiSlice } from './store-interfaces';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null } as IUiSlice,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = {
        status,
        title,
        message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
