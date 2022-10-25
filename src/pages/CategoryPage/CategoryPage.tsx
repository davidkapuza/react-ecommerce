import { Query } from "@apollo/client/react/components";
import { addToCart } from "app/cart/cart.slice";
import { mapCurrenciesStateToProps } from "app/currencies/currencies.slice";
import { AppDispatch } from "app/store";
import { Header4, PriceLabel } from "common/typography/typography";
import { Category, Currency, IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import withRouter, { WithRouterProps } from "router/withRouter";
import { allProducts } from "services/gql-requests";
import selectPrice from "utils/selectPrice";
import {
  AddToCartBtn,
  HeaderContainer,
  OutOfStockHeader,
  ProductCartIcon,
  ProductContainer,
  ProductImg,
  ProductsGridContainer,
} from "./CategoryPage.styles";

interface CategoryPageProps extends Currency, WithRouterProps {
  dispatch: AppDispatch;
}

class CategoryPageContainer extends React.PureComponent<
  CategoryPageProps
> {
  selectProduct(e: React.MouseEvent, product: string) {
    e.preventDefault();
    this.props.router?.navigate(`/products/${product}`);
  }
  selectCategory(categories: [Category]) {

    const [category] = categories.filter(
      (category) => category.name === this.props.router?.params.category
    );
    return category;
  }
  addProductToCart(e: React.MouseEvent, product: IProduct): void {
    e.stopPropagation();
    this.props.dispatch(addToCart({ product }));
  }
  render() {
    return (
      <Query<{ categories: [Category] }> query={allProducts()}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;

          let { name, products } = this.selectCategory(
            data?.categories as [Category]
          );
          products = selectPrice(
            products as IProduct[],
            this.props.label as string
          ) as [IProduct];

          return (
            <ProductsGridContainer>
              <HeaderContainer>{name}</HeaderContainer>
              {products.map((product: IProduct) => (
                <ProductContainer
                  key={product.id}
                  inStock={product.inStock}
                  onClick={(e) =>
                    this.selectProduct(e, product.id)
                  }
                >
                  {!product.inStock && (
                    <OutOfStockHeader>Out of stock</OutOfStockHeader>
                  )}
                  <ProductImg src={product.gallery[0]} alt={product.name} />
                  <AddToCartBtn
                    onClick={(e) => this.addProductToCart(e, product)}
                  >
                    <ProductCartIcon />
                  </AddToCartBtn>
                  <Header4>{product.name}</Header4>
                  <PriceLabel>
                    {product.currentPrice?.currency.symbol}
                    {product.currentPrice?.amount}
                  </PriceLabel>
                </ProductContainer>
              ))}
            </ProductsGridContainer>
          );
        }}
      </Query>
    );
  }
}

export default connect(mapCurrenciesStateToProps)(withRouter(CategoryPageContainer));
