import { PriceLabel } from "common/typography/typography";
import styled, { css } from "styled-components";

export const ProductSet = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 40px 0;
`;

export const Product = styled.div`
  height: 100%;
  min-width: 293px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  background: ${({ theme }) => theme.colors.White};
`;

export const ProductHeaders = styled.div`
  white-space: pre-line;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  overflow-wrap: break-word;
  & + ${PriceLabel} {
    margin: 8px 0;
  }
`;

export const ProductDescription = styled.div`
  width: 100%;
  margin-right: 4px;
`;

export const ProductImg = styled.img`
  width: 121px;
  object-fit: contain;
  margin-left: 8px;
`;

export const ProductsContainer = styled.div<{ secondary?: boolean }>`
  overflow-y: scroll;
  max-height: 420px;
  ${({ secondary, theme }) =>
    secondary &&
    css`
      max-height: 100%;
      overflow-y: auto;
      & ${ProductSet} {
        border-top: 1px solid ${theme.colors.LightGray};
        padding: 30px 0;
        margin: 0;
        min-height: 337px;
      }
      & ${Product} {
        min-width: 100%;
      }

      & ${ProductHeaders} {
        font-family: Raleway;
        font-size: 30px;
        font-weight: 400;
        line-height: 40px;
        &::first-line {
          font-weight: 600;
        }
        & + ${PriceLabel} {
          margin: 20px 0;
        }
      }
      & ${ProductImg} {
        width: 200px;
      }
    `}
`;
