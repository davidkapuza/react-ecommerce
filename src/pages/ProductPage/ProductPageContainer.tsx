import { Query } from "@apollo/client/react/components";
import { mapCurrenciesStateToProps } from "app/currencies/currencies.slice";
import { Currency, IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import withRouter, { WithRouterProps } from "router/withRouter";
import { selectedProduct } from "services/gql-requests";
import selectPrice from "utils/selectPrice";
import ProductPage from "./ProductPage";

class ProductPageContainer extends React.PureComponent<
  Currency & WithRouterProps
> {
  render() {
    return (
      <Query<{ product: IProduct }>
        query={selectedProduct(this.props.router.params.product ?? "")}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;
          const [product] = selectPrice(
            [data?.product] as [IProduct],
            this.props.label
          );

          return <ProductPage product={product as IProduct} />;
        }}
      </Query>
    );
  }
}

export default connect(mapCurrenciesStateToProps)(
  withRouter(ProductPageContainer)
);
