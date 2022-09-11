import { CartIcon } from "components/icons/CartIcon";
import styled, { css } from "styled-components";

export const StyledCartModal = styled.div`
  ${({ theme }) => css`
    top: ${theme.sizes.NavBarHeight};
    position: absolute;
    width: 325px;
    right: 10%;
    background: ${theme.colors.White};
    display: flex;
    z-index: 5;
    flex-direction: column;
    padding: 32px 16px;
  `}
`;

export const CounterOnCartIcon = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  background: ${({ theme }) => theme.colors.Black};
  color: ${({ theme }) => theme.colors.White};
  text-align: center;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  right: 0;
  top: 0;
`;

export const CartIconContainer = styled.div`
  height: 27px;
  width: 33px;
  position: relative;
  cursor: pointer;
`;

export const NavBarCartIcon = styled(CartIcon)`
  justify-self: end;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.Black};
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: none;
  margin: 35px 0;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
`;
