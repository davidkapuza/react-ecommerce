import React, { ReactElement } from "react";
import { StyledIconBtn } from "./IconButton.styles";

export interface IconButtonProps {
  secondary?: boolean;
  children?: ReactElement;
  onClick: () => void;
  filled?: boolean;
}

export default class IconButton extends React.PureComponent<IconButtonProps> {
  render() {
    const { filled, secondary, children, onClick } = this.props;
    return (
      <StyledIconBtn
        filled={filled}
        secondary={secondary}
        onClick={() => onClick()}
      >
        {children}
      </StyledIconBtn>
    );
  }
}
