import React, { ReactElement } from "react";
import { StyledIconBtn } from "./IconButton.styles";

export interface IconButtonProps {
  secondary?: boolean;
  children?: ReactElement;
  onClick: () => void;
}

export default class IconButton extends React.PureComponent<IconButtonProps> {
  render() {
    const { secondary, children, onClick } = this.props;
    return (
      <StyledIconBtn secondary={secondary} onClick={() => onClick()}>
        {children}
      </StyledIconBtn>
    );
  }
}
