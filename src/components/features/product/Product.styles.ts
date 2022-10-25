import styled, { css } from "styled-components";
import { PriceLabel } from "common/typography/typography";

export const StyledProduct = styled.div<{secondary?: boolean}>`
  height: 100%;
  padding-block: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: end;
  background: ${({ theme }) => theme.colors.White};
  ${({ secondary }) => secondary && css`
    padding-block: 24px;
    border-top: 1px solid #E5E5E5;
  `}
`;

export const ProductHeaders = styled.div<{secondary?: boolean}>`
  white-space: pre-line;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  overflow-wrap: break-word;
  & + ${PriceLabel} {
    margin: 8px 0;
  }
  ${({ secondary }) => secondary && css`
    font-size: 30px;
    padding-bottom: 1em;
    & h1 {
      font-weight: 500;
    }
  `}
`;

export const ProductDescription = styled.div`
  flex: 1;
  width: 100%;
  margin-right: 4px;
`;

export const ProductImg = styled.img`
  max-width: 200px;
  object-fit: contain;
  margin-left: 8px;
`;
