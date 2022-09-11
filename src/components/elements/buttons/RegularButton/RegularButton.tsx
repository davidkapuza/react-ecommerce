import React from "react";
import { StyledButton } from "./RegularButton.styles";

export interface RegularButtonProps {
  primary?: boolean;
  children?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class RegularButton extends React.PureComponent<RegularButtonProps> {
  render() {
    return (
      <StyledButton
        onClick={(e) => this.props.onClick(e)}
        primary={this.props.primary}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}
