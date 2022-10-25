import { addToCart, removeFromCart } from "app/cart/cart.slice";
import { AppDispatch } from "app/store";
import { PriceLabel } from "common/typography/typography";
import { CountChange } from "components/elements";
import { IProduct } from "models/types";
import React, { memo } from "react";
import ImagesSlider from "../images-slider/ImagesSlider";
import ProductAttributes from "../product-attributes/ProductAttributes";
import {
  StyledProduct,
  ProductDescription,
  ProductHeaders,
} from "./Product.styles";

class Product extends React.PureComponent<{
  product: IProduct;
  secondary?: boolean;
  dispatch: AppDispatch;
}> {
  render() {
    const { product, dispatch, secondary } = this.props;
    return (
      <StyledProduct secondary={secondary }>
        <ProductDescription>
          <ProductHeaders secondary={secondary}>
            <h1>{product.name}</h1>
            {"\n"}
            {product.brand}
          </ProductHeaders>

          <PriceLabel sm={!secondary} lg={secondary} fontWeight="500">
            {product.currentPrice?.currency.symbol}
            {product.currentPrice?.amount}
          </PriceLabel>
          <ProductAttributes
            secondary={secondary}
            attributes={product.attributes}
          />
        </ProductDescription>

        <CountChange
          secondary={secondary}
          increase={() => dispatch(addToCart({ product }))}
          decrease={() => dispatch(removeFromCart({ product }))}
          count={product.count}
        />
        <ImagesSlider gallery={product.gallery} secondary={secondary ?? false} />
      </StyledProduct>
    );
  }
}

export default memo(Product);
