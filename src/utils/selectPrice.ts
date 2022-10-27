import { IProduct, Price } from "models/types";

export default function selectPrice(
  products: IProduct[],
  currentLabel: string
): IProduct[] {
  return products.map((product: any) => ({
    ...product,
    currentPrice: product.prices.find(
      (price: Price) => price.currency.label === currentLabel
    ),
  }));
}
