import { cartStateToProps } from "app/cart/cart.slice";
import { AppDispatch } from "app/store";
import { Header2 } from "common/typography/typography";
import { RegularButton } from "components/elements";
import { ProductsInCart } from "components/features";
import { IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import { formatPrice } from "utils/formatPrice";
import {
  CartContainer,
  CartSumUp,
  SumUpHeaders,
  SumUpValues
} from "./CartPage.styles";

interface CartPageProps {
  cart: IProduct[];
  dispatch: AppDispatch;
  productsAmount: number;
  totalPrice: string;
}

class CartPage extends React.PureComponent<CartPageProps>{
  render() {
    const { cart, productsAmount, totalPrice } = this.props;
    const [taxRemnant, priceWithTax] = formatPrice(totalPrice)
    return (
      <CartContainer>
        <Header2>Cart</Header2>
        <ProductsInCart secondary cart={cart} />
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

export default connect(cartStateToProps)(CartPage);
