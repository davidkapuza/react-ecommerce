import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "models/types";
import { RootState } from "../store";

export type ICart = Array<{
  [set: string]: { products: IProduct[]; count?: number };
}>;

const initialState: { productsSet: ICart } = {
  productsSet: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: IProduct }>) => {
      const targetSet = state.productsSet.findIndex(
        (set) => set[action.payload.product.id]
      );

      -1 !== targetSet
        ? (state.productsSet = state.productsSet.map((set, idx) => {
            return idx === targetSet
              ? {
                  [action.payload.product.id]: {
                    products: [
                      ...state.productsSet[targetSet][
                        action.payload.product.id
                      ].products,
                      action.payload.product,
                    ],
                    count:
                      state.productsSet[targetSet][action.payload.product.id]
                        .products.length + 1,
                  },
                }
              : set;
          }))
        : (state.productsSet = [
            ...state.productsSet,
            {
              [action.payload.product.id]: {
                products: [action.payload.product],
                count: 1,
              },
            },
          ]);
    },
    removeFromCart: (state, action: PayloadAction<{ product: IProduct }>) => {
      const targetSet = state.productsSet.findIndex(
        (set) => set[action.payload.product.id]
      );
      if (-1 !== targetSet) {
        const targetProducts =
          state.productsSet[targetSet][action.payload.product.id].products;

        state.productsSet = state.productsSet.map((set, idx) =>
          idx === targetSet
            ? {
                [action.payload.product.id]: {
                  products: targetProducts.slice(0, targetProducts.length - 1),
                  count: targetProducts ? targetProducts.length - 1 : 0,
                },
              }
            : set
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartStateToProps = (state: RootState) => {
  const { productsAmount, cartTotalPrice } = state.cart.productsSet.reduce(
    (acc, set) => {
      const [{ products }] = Object.values(set);
      acc.productsAmount += products.length;
      acc.cartTotalPrice += products.reduce(
        (acc, product) => (acc += product.currentPrice?.amount ?? 0),
        0
      );
      return acc;
    },
    { productsAmount: 0, cartTotalPrice: 0 }
  );

  return {
    cart: state.cart.productsSet,
    productsAmount: productsAmount,
    cartTotalPrice: (state.currency.symbol ?? "") + cartTotalPrice,
  };
};

export default cartSlice.reducer;
