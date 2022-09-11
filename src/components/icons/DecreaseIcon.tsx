import React from "react";
import { Icon } from "./Icon";
import { IconProps } from "./Icon";

export class DecreaseIcon extends React.PureComponent<IconProps> {
  render() {
    return (
      <Icon
        viewBox="0 0 17 1"
        fill="none"
        className={this.props.className}
        onClick={() => this.props.onClick?.call(this)}
      >
        <path
          d="M1 0.5H16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    );
  }
}
