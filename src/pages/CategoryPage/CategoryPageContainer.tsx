import { Query } from "@apollo/client/react/components";
import { addToCart } from "app/cart/cart.slice";
import { mapCurrenciesStateToProps } from "app/currencies/currencies.slice";
import { AppDispatch } from "app/store";
import { Category, Currency, IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import withRouter, { WithRouterProps } from "router/withRouter";
import { allProducts } from "services/gql-requests";
import selectPrice from "utils/selectPrice";
import CategoryPage from "./CategoryPage";

interface CategoryPageProps extends Currency, WithRouterProps {
  dispatch: AppDispatch;
}

class CategoryPageContainer extends React.PureComponent<CategoryPageProps> {
  constructor(props: CategoryPageProps) {
    super(props);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }
  selectCategory(categories: [Category]) {
    const [category] = categories.filter(
      (category) => category.name === this.props.router?.params.category
    );
    return category;
  }
  selectProduct(e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) {
    e.preventDefault();
    console.log(this.props);
    this.props.router.navigate(`/products/${id}`);
  }
  addProductToCart(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: IProduct
  ): void {
    e.stopPropagation();
    this.props.dispatch(addToCart({ product }));
  }

  render() {
    console.log(this.props);
    return (
      <Query<{ categories: Category[] }> query={allProducts()}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;

          let { name, products } = this.selectCategory(
            data?.categories as [Category]
          );
          products = selectPrice(products, this.props.label);

          return (
            <CategoryPage
              products={products}
              categoryName={name}
              selectProduct={this.selectProduct}
              addProductToCart={this.addProductToCart}
            />
          );
        }}
      </Query>
    );
  }
}

export default connect(mapCurrenciesStateToProps)(
  withRouter(CategoryPageContainer)
);
