import { Gallery, ProductCustomisation } from "components/features";
import { IProduct } from "models/types";
import React from "react";
import {
  ProductGalleryContainer,
  ProductGridContainer,
} from "./ProductPage.styles";

interface ProductPageProps {
  product: IProduct;
}

export default class ProductPage extends React.PureComponent<ProductPageProps> {
  render() {
    const { product } = this.props;
    return (
      <ProductGridContainer>
        <ProductGalleryContainer>
          <Gallery
            inStock={product.inStock}
            gallery={product.gallery}
          />
        </ProductGalleryContainer>
        <ProductCustomisation isProductPage product={product} />
      </ProductGridContainer>
    );
  }
}
