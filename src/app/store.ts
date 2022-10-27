import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import currencyReducer from "./currencies/currencies.slice"
import cartReducer from "./cart/cart.slice"

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
