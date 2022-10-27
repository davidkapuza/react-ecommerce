import { Header4, PriceLabel } from "common/typography/typography";
import { IProduct } from "models/types";
import React from "react";
import { ProductsGridContainer, HeaderContainer, ProductContainer, OutOfStockHeader, ProductImg, AddToCartBtn, ProductCartIcon } from "./CategoryPage.styles";


interface CategoryPageProps {
  categoryName: string,
  products: IProduct[],
  selectProduct: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void;
  addProductToCart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: IProduct) => void;
}

export default class CategoryPage extends React.PureComponent<CategoryPageProps> {
  render() {
    const { categoryName, products, selectProduct, addProductToCart } = this.props;
    return (
      <ProductsGridContainer>
        <HeaderContainer>{categoryName}</HeaderContainer>
        {products.map((product: IProduct) => (
          <ProductContainer
            key={product.id}
            inStock={product.inStock}
            onClick={(e) => selectProduct(e, product.id)}
          >
            {!product.inStock && (
              <OutOfStockHeader>Out of stock</OutOfStockHeader>
            )}
            <ProductImg src={product.gallery[0]} alt={product.name} />
            <AddToCartBtn onClick={(e) => addProductToCart(e, product)}>
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
  }
}
