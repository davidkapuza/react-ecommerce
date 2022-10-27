import logo from "assets/logo.svg";
import Modal from 'components/layout/modal/Modal';
import { Category, Currency } from 'models/types';
import React from 'react';
import CartModal from '../cart-modal/CartModal';
import DropDownContainer from '../dropdown/DropDownContainer';
import {
  CartAndCurrencyContainer, Logo, NavBar,
  NavBarMenuIcon, NavItem,
  NavLink, NavList
} from "./Navigation.styles";

interface NavigationProps {
  categories?: Category[];
  currencies?: Currency[];
  isExtended: boolean;
  toggleNavBar: () => void;
}

export default class Navigation extends React.PureComponent<NavigationProps> {
  render() {
    const { categories, currencies, isExtended, toggleNavBar } = this.props;
    return (
      <NavBar>
        <NavBarMenuIcon onClick={() => toggleNavBar()} />
        <NavList display={isExtended ? "flex" : "none"}>
          {categories?.map(({ name }) => {
            return (
              <NavItem key={name}>
                <NavLink
                  to={name}
                  onClick={() => toggleNavBar()}
                  $active={
                    window.location.pathname.endsWith(name) ? true : false
                  }
                >
                  {name}
                </NavLink>
              </NavItem>
            );
          })}
        </NavList>
        <Logo src={logo} />
        <CartAndCurrencyContainer>
          <Modal>
            <DropDownContainer currencies={currencies} />
          </Modal>
          <Modal withBackground>
            <CartModal />
          </Modal>
        </CartAndCurrencyContainer>
      </NavBar>
    );
  }
}
