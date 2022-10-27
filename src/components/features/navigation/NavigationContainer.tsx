import { Query } from "@apollo/client/react/components";
import { Category, Currency } from "models/types";
import React from "react";
import { categoriesAndCurrencies } from "services/gql-requests";
import Navigation from "./Navigation";

interface NavigationContainerState {
  isExtended: boolean;
}

class NavigationContainer extends React.PureComponent<
  {},
  NavigationContainerState
> {
  constructor(props: {}) {
    super(props);
    this.state = { isExtended: false };
    this.toggleNavBar = this.toggleNavBar.bind(this);
  }
  toggleNavBar() {
    this.setState({
      isExtended: !this.state.isExtended,
    });
  }
  render() {
    return (
      <Query<{ categories: Category[] } & { currencies: Currency[] }>
        query={categoriesAndCurrencies()}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;
          return (
            <Navigation
              categories={data?.categories}
              currencies={data?.currencies}
              isExtended={this.state.isExtended}
              toggleNavBar={this.toggleNavBar}
            />
          );
        }}
      </Query>
    );
  }
}

export default NavigationContainer;
