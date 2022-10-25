import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "models/types";
import { deepEqual } from "utils/deepEqual";
import { RootState } from "../store";

const initialState: IProduct[] = [];

// ? wasn't sure if loadash is allowed, would use loadash uniqueId and deepEqual

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: IProduct }>) => {
      const target = state.findIndex((product) => {
        return product.id === action.payload.product.id
          ? deepEqual(product.attributes, action.payload.product.attributes)
          : false;
      });

      ~target
        ? (state[target].count += 1)
        : state.push({
            ...action.payload.product,
            count: 1,
            uid: Math.random(),
          });
    },
    removeFromCart: (state, action: PayloadAction<{ product: IProduct }>) => {
      const target = state.findIndex(
        (product) =>
          product.uid === action.payload.product.uid && product.count > 1
      );
      if (~target) {
        state[target].count -= 1;
        return;
      }

      return state.filter(
        (product) => product.uid !== action.payload.product.uid
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;


export const cartStateToProps = (state: RootState) => {
  const { productsAmount, totalPrice } = state.cart.reduce(
    (acc, product) => {
      acc.productsAmount += product.count;
      acc.totalPrice += (product?.currentPrice?.amount ?? 0) * +product.count;
      return acc;
    },
    { productsAmount: 0, totalPrice: 0 }
  );

  return {
    cart: state.cart,
    productsAmount,
    totalPrice: (state.currency.symbol ?? "") + totalPrice,
  };
};


export default cartSlice.reducer;
