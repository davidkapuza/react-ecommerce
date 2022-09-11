import { cartStateToProps, ICart } from "app/cart/cart.slice";
import { AppDispatch } from "app/store";
import { Header6, PriceLabel } from "common/typography/typography";
import { RegularButton } from "components/elements";
import withRouter, { WithRouterProps } from "hooks/withRouter";
import React from "react";
import { connect } from "react-redux";
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

interface CartModalProps extends WithRouterProps {
  toggleModal?: () => void;
  showModal?: boolean;
  cart: ICart;
  dispatch: AppDispatch;
  productsAmount: number;
  cartTotalPrice: string;
}

class CartModal extends React.Component<CartModalProps> {
  render() {
    const { cart, productsAmount, cartTotalPrice, dispatch } = this.props;
    const [taxRemnant, priceWithTax] = formatPrice(cartTotalPrice)
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
            <ProductsInCart cart={cart} dispatch={dispatch} />
            <Summary>
              Total:
              <PriceLabel sm>{priceWithTax}</PriceLabel>
            </Summary>
            <ButtonsContainer>
              <RegularButton
                onClick={() => this.props.router?.navigate("cart")}
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
