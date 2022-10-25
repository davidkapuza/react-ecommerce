import { Query } from "@apollo/client/react/components";
import logo from "assets/logo.svg";
import Modal from "components/layout/modal/Modal";
import { Category, Currency } from "models/types";
import React from "react";
import { categoriesAndCurrencies } from "services/gql-requests";
import { CartModal, DropDown } from "..";
import {
  CartAndCurrencyContainer,
  Logo,
  NavBar,
  NavBarMenuIcon,
  NavItem,
  NavLink,
  NavList,
} from "./Navigation.styles";

interface NavigationProps {
  handleClick?: () => void;
}

interface NavigationState {
  isExtended: boolean;
}

class Navigation extends React.PureComponent<NavigationProps, NavigationState> {
  constructor(props: NavigationProps) {
    super(props);
    this.state = { isExtended: false };
  }
  toggleNavBar() {
    this.setState({
      isExtended: !this.state.isExtended,
    });
  }
  render() {
    return (
      <Query<{ categories: [Category] } & { currencies: [Currency] }>
        query={categoriesAndCurrencies()}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;
          return (
            <NavBar>
              <NavBarMenuIcon onClick={() => this.toggleNavBar()} />
              <NavList display={this.state.isExtended ? "flex" : "none"}>
                {data?.categories.map(({ name }) => {
                  return (
                    <NavItem key={name}>
                      <NavLink
                        to={name}
                        onClick={() => this.toggleNavBar()}
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
                  <DropDown data={data?.currencies} />
                </Modal>
                <Modal withBackground>
                  <CartModal />
                </Modal>
              </CartAndCurrencyContainer>
            </NavBar>
          );
        }}
      </Query>
    );
  }
}

export default Navigation;
