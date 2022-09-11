import styled, { css } from "styled-components";

export const Header1 = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 200px;
`;

export const Header2 = styled.h2`
  font-family: "Raleway";
  font-size: 32px;
  font-weight: 700;
  line-height: 150px;
  text-transform: uppercase;
`;

export const Header3 = styled.h3<{ secondary?: boolean; fontWeight?: string }>`
  font-family: "Raleway";
  font-style: normal;
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || "700"};
  font-size: 30px;
  line-height: 24px;
`;

export const Header4 = styled.h4<{ fontWeight?: string }>`
  font-family: "Raleway";
  font-style: normal;
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || 300};
  font-size: 18px;
  line-height: 160%;
`;

export const Header5 = styled.h5<{ fontWeight?: string }>`
  font-family: "Raleway";
  font-size: 24px;
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  line-height: 28px;
  text-align: left;
`;

export const Header6 = styled.h6<{ fontWeight?: string }>`
  font-family: "Raleway";
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  font-size: 16px;
  line-height: 160%;
`;

export const Paragraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
`;

export const Label = styled.label<{ lg?: boolean }>`
  display: inline-block;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin: 8px 0;
  text-transform: capitalize;
  ${({ lg }) =>
    lg &&
    css`
      font-family: "Roboto Condensed";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 18px;
      margin: 16px 0 8px;
      text-transform: uppercase;
    `}
`;

interface PriceLabelProps {
  fontWeight?: string;
  sm?: boolean;
  lg?: boolean;
}

export const PriceLabel = styled.h5<PriceLabelProps>`
  font-family: Raleway;
  font-size: 18px;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  line-height: 29px;
  text-transform: uppercase;
  ${({ sm, lg, fontWeight }) =>
    (sm &&
      css`
        font-size: 16px;
        font-weight: ${fontWeight || 700};
        line-height: 26px;
      `) ||
    (lg &&
      css`
        font-weight: ${fontWeight || 700};
        font-size: 24px;
        line-height: 18px;
      `)}
`;
