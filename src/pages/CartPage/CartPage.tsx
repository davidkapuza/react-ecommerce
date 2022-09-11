import { cartStateToProps, ICart } from "app/cart/cart.slice";
import { mapCurrenciesStateToProps } from "app/currencies/currencies.slice";
import { AppDispatch } from "app/store";
import { Header2 } from "common/typography/typography";
import { RegularButton } from "components/elements";
import { ProductsInCart } from "components/features";
import withRouter from "hooks/withRouter";
import React from "react";
import { connect } from "react-redux";
import { formatPrice } from "utils/formatPrice";
import {
  CartContainer,
  CartSumUp,
  SumUpHeaders,
  SumUpValues,
} from "./CartPage.styles";

interface CartPage {
  cart: ICart;
  dispatch: AppDispatch;
  productsAmount: number;
  cartTotalPrice: string;
}

class CartPage extends React.PureComponent<CartPage> {
  render() {

    const { cart, dispatch, productsAmount, cartTotalPrice } = this.props;
    const [taxRemnant, priceWithTax] = formatPrice(cartTotalPrice)
    return (
      <CartContainer>
        <Header2>Cart</Header2>
        <ProductsInCart secondary cart={cart} dispatch={dispatch} />
        <CartSumUp>
          <SumUpHeaders>
            Tax 21%:{"\n"}
            Quantity:{"\n"}
            Total:{"\n"}
          </SumUpHeaders>
          <SumUpValues>
            {taxRemnant}{"\n"}
            {productsAmount}{"\n"}
            {priceWithTax}{"\n"}
          </SumUpValues>
          <RegularButton primary onClick={() => console.log("Ordering...")}>
            Order
          </RegularButton>
        </CartSumUp>
      </CartContainer>
    );
  }
}

export default connect(cartStateToProps)(withRouter(CartPage));
