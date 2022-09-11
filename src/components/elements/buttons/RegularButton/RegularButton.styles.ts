import styled, { css } from "styled-components";
import { RegularButtonProps } from "./RegularButton";

export const StyledButton = styled.button<RegularButtonProps>`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  height: 52px;
  cursor: pointer;

  ${({ theme, primary }) => css`
    color: ${primary ? theme.colors.White : theme.colors.Black};
    background: ${primary ? theme.colors.Green : theme.colors.White};
    border: 1px solid ${primary ? theme.colors.Green : theme.colors.Black};
  `}
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;
