import { Header3, Label, Paragraph, PriceLabel } from "common/typography/typography";
import { IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import { addToCart, cartStateToProps } from "app/cart/cart.slice";
import { AppDispatch } from "app/store";
import { ProductAttributes } from "..";
import { AttributesState } from "../product-attributes/ProductAttributes";
import {
  ProductBtnContainer,
  ProductCustomisationContainer,
  Subheader,
} from "./ProductCustomisation.styles";

interface ProductCustomisationProps {
  product: IProduct;
  dispatch: AppDispatch;
}

class ProductCustomisation extends React.PureComponent<ProductCustomisationProps> {
  attributesInstance: ProductAttributes | null = null;

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
    const clearStringFromTags = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    const { product } = this.props;
    return (
      <ProductCustomisationContainer>
        <Header3>{product.name}</Header3>
        <Subheader fontWeight="400">{product.brand}</Subheader>
        <ProductAttributes
          secondary
          attributes={product.attributes}
          ref={(instance) => (this.attributesInstance = instance)}
          addToCart={(attributes: Readonly<AttributesState>) =>
            this.addToCartHandler(attributes)
          }
        />
        <Label lg>Price:</Label>
        <PriceLabel lg>
          {product.currentPrice?.currency.symbol}
          {product.currentPrice?.amount}
        </PriceLabel>
        <ProductBtnContainer
          primary
          onClick={(e: React.MouseEvent<HTMLElement>) =>
            this.attributesInstance
              ? this.attributesInstance.addToCartHandler(e)
              : null
          }
        >
          Add to cart
        </ProductBtnContainer>
        <Paragraph>{product.description.replace(clearStringFromTags, "")}</Paragraph>
      </ProductCustomisationContainer>
    );
  }
}

export default connect(cartStateToProps)(ProductCustomisation);
