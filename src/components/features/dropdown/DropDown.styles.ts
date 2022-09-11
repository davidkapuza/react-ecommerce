import styled from "styled-components";
import { ExpandIcon } from "../../icons/ExpandIcon";

export const Selected = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
  height: 17px;
`;

export const NavbarExpandIcon = styled(ExpandIcon)`
  width: 8px;
  height: 4px;
  margin: 0 6px;
  transform: ${({ rotate }) => rotate};
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 65px;
  background: ${({ theme }) => theme.colors.White};
  filter: ${({ theme }) => theme.shadows.DropDownShadow};
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  padding: 20px 28px;
  white-space: nowrap;
  &:hover {
    background: ${({ theme }) => theme.colors.LightGray};
  }
`;
