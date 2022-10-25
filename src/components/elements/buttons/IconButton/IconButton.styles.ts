import { Icon } from "components/icons/Icon";
import styled, { css } from "styled-components";

export const StyledIconBtn = styled.button<{
  secondary?: boolean;
  filled?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.colors.Black};
  background: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  & ${Icon} {
    width: 8px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }
  ${({ secondary, filled }) =>
    secondary &&
    css`
      width: 45px;
      height: 45px;

      & ${Icon} {
        width: 15px;
      }
    `}
  ${({ filled }) =>
    filled &&
    css`
      background: ${({ theme }) => theme.colors.Black};
      & ${Icon} {
        color: ${({ theme }) => theme.colors.White};
      }
    `}
`;
