import { addToCart, cartStateToProps } from "app/cart/cart.slice";
import { AppDispatch } from "app/store";
import { IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";

import ProductAttributesContainer, {
  AttributesState,
} from "../product-attributes/ProductAttributesContainer";
import ProductCustomisation from "./ProductCustomisation";

interface ProductCustomisationConatainerProps {
  product: IProduct;
  dispatch: AppDispatch;
  isProductPage?: boolean;
}

class ProductCustomisationConatainer extends React.PureComponent<ProductCustomisationConatainerProps> {
  attributesInstance: ProductAttributesContainer | null = null;
  constructor(props: ProductCustomisationConatainerProps) {
    super(props);
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }
  addToCartHandler(attributes: Readonly<AttributesState>) {
    const product = {
      ...this.props.product,
      attributes: Object.keys(attributes).map((key, setIdx) => ({
        ...this.props.product.attributes[setIdx],
        items: this.props.product.attributes[setIdx].items.map((item, idx) =>
          attributes[key][idx] ? { ...item, selected: true } : item
        ),
      })),
    };

    this.props.dispatch(addToCart({ product }));
  }
  render() {
    const { product, isProductPage } = this.props;
    return (
      <ProductCustomisation
        product={product}
        isProductPage={isProductPage}
        attributesInstance={this.attributesInstance}
        addToCartHandler={this.addToCartHandler}
      />
    );
  }
}

export default connect(cartStateToProps)(ProductCustomisationConatainer);
