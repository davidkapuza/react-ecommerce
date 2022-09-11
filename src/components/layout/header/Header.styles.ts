import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.White};
  height: ${({ theme }) => theme.sizes.NavBarHeight};
  width: 100%;
  position: fixed;
  z-index: 10;
`;