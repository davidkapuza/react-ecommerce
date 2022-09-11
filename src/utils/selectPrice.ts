import { IProduct } from "models/types";

export default function selectPrice(
  products: IProduct[] | IProduct,
  currentLabel: string
) {
  if (Array.isArray(products)) {
    return products.map((product) => ({
      ...product,
      currentPrice: product.prices.find(
        (price: any) => price.currency.label === currentLabel
      ),
    }));
  }
  return {
    ...products,
    currentPrice: products.prices.find(
      (price: any) => price.currency.label === currentLabel
    ),
  };
}
