import { MenuIcon } from "components/icons/MenuIcon";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavBar = styled.nav`
  height: ${({ theme }) => theme.sizes.NavBarHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavList = styled.ul<{ display: "flex" | "none" }>`
  background: ${({ theme }) => theme.colors.White};
  top: ${({ theme }) => theme.sizes.NavBarHeight};
  position: absolute;
  display: ${({ display }) => display};
  flex-direction: column;
  @media (min-width: 768px) {
    top: 0;
    display: flex !important;
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    line-height: ${theme.sizes.NavBarHeight};
    height: ${theme.sizes.NavBarHeight};
  `}
`;

export const NavLink = styled(Link)<{$active: boolean}>`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 0px 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.Black};
  ${({ $active }) => $active && css`
    color: ${({ theme }) => theme.colors.SecondaryGreen};
    box-shadow: 0 4px 0 currentcolor;
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.SecondaryGreen};
    box-shadow: 0 4px 0 currentcolor;
  }
`;

export const NavBarMenuIcon = styled(MenuIcon)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-right: 0;
  color: ${({ theme }) => theme.colors.Black};
  @media (min-width: 768px) {
    visibility: hidden;
    margin-right: 50px;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.media.Small}) {
    display: none;
  }
`;

export const CartAndCurrencyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  min-width: 81px;
  align-items: end;
  margin-bottom: 8px;
`;
