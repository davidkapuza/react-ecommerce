import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "models/types";
import { RootState } from "../store";

const initialState: Currency = {
  symbol: "$",
  label: "USD",
};

export const currenciesSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<Currency>) => {
      state.symbol = action.payload.symbol;
      state.label = action.payload.label;
    },
  },
});

export const { changeCurrency } = currenciesSlice.actions;

export const mapCurrenciesStateToProps = (state: RootState) => {
  return {
    symbol: state.currency.symbol,
    label: state.currency.label,
  };
};

export default currenciesSlice.reducer;
