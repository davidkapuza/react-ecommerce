import gql from "graphql-tag";

export const categoriesAndCurrencies = () => gql`
  query {
    category {
      name
    }
    categories {
      name
    }
    currencies {
      symbol
      label
    }
  }
`;

export const allProducts = () => gql`
  query {
    categories {
      name
      products {
        id
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        name
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const selectedProduct = (itemName: string) => gql`
query {
  product(id: "${itemName}") {
    id     
    name
    gallery
    brand
    description
    attributes {
			id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      amount
      currency {
        label
        symbol
      }
    }
  }
}
`;
