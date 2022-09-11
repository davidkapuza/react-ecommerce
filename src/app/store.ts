import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/features/counter/counterSlice';
import currencyReducer from "./currencies/currencies.slice"
import cartReducer from "./cart/cart.slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
