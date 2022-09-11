import styled, { css } from "styled-components";

export const ProductCount = styled.div<{ secondary?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;

  ${({ secondary }) =>
    secondary &&
    css`
      font-family: "Raleway";
      font-size: 24px;
      font-weight: 500;
    `}
`;
