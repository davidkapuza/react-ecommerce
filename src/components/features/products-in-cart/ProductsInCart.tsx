import { mapCurrenciesStateToProps } from "app/currencies/currencies.slice";
import { AppDispatch } from "app/store";
import { Currency, IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import selectPrice from "utils/selectPrice";
import Product from "../product/Product";
import { ProductsContainer } from "./ProductsInCart.styles";

interface ProductInCart extends Currency {
  cart: IProduct[];
  dispatch: AppDispatch;
  secondary?: boolean;
}

class ProductsInCart extends React.PureComponent<ProductInCart> {
  render() {
    const { cart, dispatch, secondary } = this.props;
    const products = selectPrice(
      cart as IProduct[],
      this.props.label as string
    ) as [IProduct];
    return (
      <ProductsContainer secondary={secondary}>
        {products.map((product) => (
          <Product
            key={product.uid}
            product={product}
            dispatch={dispatch}
            secondary={secondary}
          />
        ))}
      </ProductsContainer>
    );
  }
}

export default connect(mapCurrenciesStateToProps)(ProductsInCart);
