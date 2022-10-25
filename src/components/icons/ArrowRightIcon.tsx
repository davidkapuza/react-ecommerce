import React from "react";
import { Icon } from "./Icon";
import { IconProps } from "./Icon";

export class ArrowRightIcon extends React.PureComponent<IconProps> {
  render() {
    return (
      <Icon
        style={{ width: "15px", height: "15px" }}
        viewBox="0 0 24 24"
        className={this.props.className}
        onClick={() => this.props.onClick?.call(this)}
      >
        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </Icon>
    );
  }
}