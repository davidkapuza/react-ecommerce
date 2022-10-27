import { cartStateToProps } from "app/cart/cart.slice";
import { AppDispatch } from "app/store";
import {
  Header3,
  Label,
  Paragraph,
  PriceLabel,
} from "common/typography/typography";
import { IProduct } from "models/types";
import React from "react";
import { connect } from "react-redux";
import { clearFromTags } from "utils/clearFromTags";
import { ProductAttributes } from "..";
import ProductAttributesContainer, {
  AttributesState,
} from "../product-attributes/ProductAttributesContainer";
import {
  ProductBtnContainer,
  ProductCustomisationWrapper,
  Subheader,
} from "./ProductCustomisation.styles";

interface ProductCustomisationProps {
  product: IProduct;
  dispatch: AppDispatch;
  isProductPage?: boolean;
  attributesInstance: ProductAttributesContainer | null;
  addToCartHandler: (attributes: AttributesState) => void;
}

class ProductCustomisation extends React.PureComponent<ProductCustomisationProps> {
  render() {
    let { product, attributesInstance, isProductPage, addToCartHandler } =
      this.props;
    return (
      <ProductCustomisationWrapper>
        <Header3>{product.name}</Header3>
        <Subheader fontWeight="400">{product.brand}</Subheader>
        <ProductAttributes
          secondary
          isProductPage={isProductPage ?? false}
          attributes={product.attributes}
          ref={(instance) => (attributesInstance = instance)}
          addToCart={(attributes: Readonly<AttributesState>) =>
            addToCartHandler(attributes)
          }
        />
        <Label lg>Price:</Label>
        <PriceLabel lg>
          {product.currentPrice?.currency.symbol}
          {product.currentPrice?.amount}
        </PriceLabel>
        <ProductBtnContainer
          primary
          disabled={!product.inStock}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            attributesInstance ? attributesInstance.addToCartHandler(e) : null
          }
        >
          Add to cart
        </ProductBtnContainer>
        <Paragraph>{clearFromTags(product.description)}</Paragraph>
      </ProductCustomisationWrapper>
    );
  }
}

export default connect(cartStateToProps)(ProductCustomisation);
