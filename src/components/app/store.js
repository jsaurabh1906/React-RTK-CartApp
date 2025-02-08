import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../features/ui/uiSlice";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
