import { cartStateToProps } from "app/cart/cart.slice";
import { AppDispatch } from "app/store";
import { Header6, PriceLabel } from "common/typography/typography";
import { RegularButton } from "components/elements";
import { IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import withRouter, { WithRouterProps } from "router/withRouter";
import { formatPrice } from "utils/formatPrice";

import ProductsInCart from "../products-in-cart/ProductsInCart";
import {
  ButtonsContainer,
  CartIconContainer,
  CounterOnCartIcon,
  NavBarCartIcon,
  StyledCartModal,
  Summary,
} from "./CartModal.styles";

interface CartModalProps extends WithRouterProps{
  toggleModal?: () => void;
  showModal?: boolean;
  cart: IProduct[];
  dispatch: AppDispatch;
  productsAmount: number;
  totalPrice: string;
}

class CartModal extends React.PureComponent<CartModalProps> {
  openCartPage() {
    this.props.toggleModal?.call(this)
    this.props.router?.navigate("cart")
  }
  render() {
    const { cart, productsAmount, totalPrice } = this.props;
    const [taxRemnant, priceWithTax] = formatPrice(totalPrice)
    return (
      <>
        <CartIconContainer onClick={() => this.props.toggleModal?.call(this)}>
          <NavBarCartIcon />
          {!!productsAmount && (
            <CounterOnCartIcon>{productsAmount}</CounterOnCartIcon>
          )}
        </CartIconContainer>
        {this.props.showModal && (
          <StyledCartModal>
            <Header6>
              <strong>My Bag</strong>, {productsAmount} items
            </Header6>
            <ProductsInCart cart={cart} />
            <Summary>
              Total:
              <PriceLabel sm>{priceWithTax}</PriceLabel>
            </Summary>
            <ButtonsContainer>
              <RegularButton
                onClick={() => this.openCartPage()}
              >
                View Bag
              </RegularButton>
              <RegularButton primary onClick={() => console.log("check out")}>
                Check out
              </RegularButton>
            </ButtonsContainer>
          </StyledCartModal>
        )}
      </>
    );
  }
}

export default connect(cartStateToProps)(withRouter(CartModal));
