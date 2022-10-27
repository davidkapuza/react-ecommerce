export type Price = {
  currency: Currency;
  amount: number;
};

export type Attribute = {
  displayValue: string;
  value: string;
  id: string;
  selected: boolean;
};

export type AttributeSet = {
  id: string;
  name: string;
  type: string;
  items: Attribute[];
};
export type IProduct = {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: AttributeSet[];
  prices: Price[];
  currentPrice: Price;
  brand: string;
  count: number
  uid: number
};

export type Category = {
  name: string;
  products: IProduct[];
};

export type Currency = {
  label: string;
  symbol: string;
};


export type Categories = { categories: [Category] }
export type Currencies = { currencies: [Currency] }
