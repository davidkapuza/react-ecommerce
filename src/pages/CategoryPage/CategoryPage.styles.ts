import { Header1, Header5 } from "common/typography/typography";
import { CartIcon } from "components/icons/CartIcon";
import styled, { css } from "styled-components";

export const ProductsGridContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(386px, 1fr));
  grid-gap: 0 40px;
  margin-top: 100px;
`;

export const HeaderContainer = styled(Header1)`
  text-transform: capitalize;
  grid-column: 1 / -1;
`;

export const ProductImg = styled.img`
  margin-bottom: 24px;
  object-fit: contain;
  height: 330px;
  width: 100%;
`;

export const AddToCartBtn = styled.button`
  display: none;
  right: 38px;
  bottom: 83px;
  position: absolute;
  width: 52px;
  height: 52px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.Green};
  border: none;
  cursor: pointer;
`;
export const ProductCartIcon = styled(CartIcon)`
  color: ${({ theme }) => theme.colors.White};
  width: 24px;
  height: 24px;
`;

export const ProductContainer = styled.div<{ inStock: boolean }>`
  ${({ theme, inStock }) => css`
    color: ${inStock ? theme.colors.Black : theme.colors.Gray};
    padding: 16px 16px 24px 16px;
    min-height: 444px;
    cursor: pointer;
    position: relative;
    margin-bottom: 103px;
    & > img {
      ${!inStock && "opacity: 0.4"}
    }
    &:hover {
      box-shadow: ${theme.shadows.ProductCardShadow};
    }
    &:hover ${AddToCartBtn} {
      display: ${inStock && "block"};
    }
  `}
`;

export const OutOfStockHeader = styled(Header5)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-weight: 400;
`;
