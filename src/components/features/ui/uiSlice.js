import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  notification: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      // while using redux toolkit we are not really mutating the state even though if we write mutating code
      //Redux Toolkit internally takes care of immutability using immer library
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

//export reducers in two ways
export default uiSlice; // or
// export default uiSlice.reducer;
