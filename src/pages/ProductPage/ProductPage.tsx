import { Query } from "@apollo/client/react/components";
import { mapCurrenciesStateToProps } from "app/currencies/currencies.slice";
import { Gallery, ProductCustomisation } from "components/features";
import { Currency, IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import withRouter, { WithRouterProps } from "router/withRouter";
import { selectedProduct } from "services/gql-requests";
import selectPrice from "utils/selectPrice";
import {
  ProductGalleryContainer,
  ProductGridContainer,
} from "./ProductPage.styles";

class ProductPageContainer extends React.PureComponent<
  Currency & WithRouterProps
> {
  render() {
    return (
      <Query<{ product: IProduct }>
        // ? rgx for replacing everything between "/" "/"
        query={selectedProduct(this.props.router?.params?.product ?? "")}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;

          let product = selectPrice(
            data?.product as IProduct,
            this.props.label as string
          ) as IProduct;

          return (
            <ProductGridContainer>
              <ProductGalleryContainer>
                <Gallery
                  inStock={product.inStock}
                  gallery={product.gallery}
                  defaultImg={product.gallery[0]}
                />
              </ProductGalleryContainer>
              <ProductCustomisation isProductPage product={product} />
            </ProductGridContainer>
          );
        }}
      </Query>
    );
  }
}

export default connect(mapCurrenciesStateToProps)(
  withRouter(ProductPageContainer)
);
