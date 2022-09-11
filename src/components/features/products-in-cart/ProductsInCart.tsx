import { addToCart, ICart, removeFromCart } from "app/cart/cart.slice";
import { AppDispatch } from "app/store";
import { PriceLabel } from "common/typography/typography";
import { CountChange } from "components/elements";
import React from "react";
import ProductAttributes from "../product-attributes/ProductAttributes";
import {
  Product,
  ProductDescription,
  ProductHeaders,
  ProductImg,
  ProductsContainer,
  ProductSet,
} from "./ProductsInCart.styles";

interface ProductInCart {
  cart: ICart;
  dispatch: AppDispatch;
  secondary?: boolean;
}

class ProductsInCart extends React.PureComponent<ProductInCart> {
  render() {
    const { cart, dispatch, secondary } = this.props;
    return (
      <ProductsContainer secondary={secondary}>
        {cart.map((set) =>
          Object.entries(set).map(([key, setValues], setIdx) => {
            let { products, count } = setValues;
            return (
              !!products.length && (
                <ProductSet key={key}>
                  {products.map((product, idx) => (
                    <Product key={setIdx + "" + idx}>
                      <ProductDescription>
                        <ProductHeaders>
                          {product.name}
                          {"\n"}
                          {product.brand}
                        </ProductHeaders>

                        <PriceLabel
                          sm={!secondary}
                          lg={secondary}
                          fontWeight="500"
                        >
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
                        count={count ?? 0}
                      />
                      <ProductImg src={product.gallery[0]} />
                    </Product>
                  ))}
                </ProductSet>
              )
            );
          })
        )}
      </ProductsContainer>
    );
  }
}

export default ProductsInCart;
