import React from "react";
import { Icon } from "./Icon";
import { IconProps } from "./Icon";

export class DecreaseIcon extends React.PureComponent<IconProps> {
  render() {
    return (
      <Icon
        style={{ width: "15px", height: "15px" }}
        viewBox="0 0 24 24"
        className={this.props.className}
        onClick={() => this.props.onClick?.call(this)}
      >
        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
      </Icon>
    );
  }
}
