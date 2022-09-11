import React from "react";
import { Icon } from "./Icon";
import { IconProps } from "./Icon";

export class IncreaseIcon extends React.PureComponent<IconProps> {
  render() {
    return (
      <Icon
        viewBox="0 0 17 17"
        fill="none"
        className={this.props.className}
        onClick={() => this.props.onClick?.call(this)}
      >
        <path
          d="M8.5 1V16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 8.5H16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    );
  }
}
