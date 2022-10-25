import styled, { css } from "styled-components";
import { CheckBoxProps } from "./CheckBox";

export const CheckboxContainer = styled.div<{
  secondary?: boolean;
  color?: string;
}>`
  ${({ secondary, color }) =>
    color === "none"
      ? css`
          min-width: ${secondary ? "63px" : "24px"};
          height: ${secondary ? "45px" : "24px"};
        `
      : css`
          width: ${secondary ? "32px" : "16px"};
          height: ${secondary ? "32px" : "16px"};
        `}
  display: inline-block;
  vertical-align: middle;
  position: relative;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  cursor: pointer;
  height: 45px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledCheckbox = styled.div<CheckBoxProps>`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 45px;
  display: inline-block;
  width: 100%;
  height: 100%;

  ${({ theme, checked, color, secondary }) =>
    color === "none"
      ? css`
          font-size: ${secondary ? "16px" : "14px"};
          line-height: ${secondary ? "45px" : "21px"};
          padding: ${secondary ? "0" : "0 5px"};
          color: ${checked ? theme.colors.White : theme.colors.SecondaryBlack};
          background: ${checked ? theme.colors.SecondaryBlack : "none"};
          border: 1px solid ${theme.colors.SecondaryBlack};
        `
      : css`
          background: ${color};
          border: 1px solid ${checked ? theme.colors.Green : theme.colors.White};
          box-shadow: 0 0 0 1px ${theme.colors.White} inset;
          box-sizing: border-box;
        `}
`;
