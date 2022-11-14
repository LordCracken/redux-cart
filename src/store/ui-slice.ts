import { createSlice } from '@reduxjs/toolkit';

import { IUiSlice } from './store-interfaces';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false } as IUiSlice,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
