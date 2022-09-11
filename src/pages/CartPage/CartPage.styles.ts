import styled from "styled-components";

export const CartContainer = styled.article`
  margin-top: 100px;
`;

export const CartSumUp = styled.div`
  width: 279px;
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  grid-template-rows: 1fr 43px;
  row-gap: 20px;
  & button {
    grid-column: 1 / -1;
  }
  margin: 32px 0 100px;
`;

export const SumUpHeaders = styled.div`
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  white-space: break-spaces;
`;
export const SumUpValues = styled.div`
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  white-space: break-spaces;
`;
