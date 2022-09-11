import React from "react";
import { Icon } from "./Icon";
import { IconProps } from "./Icon";


export class ExpandIcon extends React.PureComponent<IconProps> {
  render() {
    return (
      <Icon
        viewBox="0 0 8 4"
        fill="none"
        className={this.props.className}
        onClick={() => this.props.onClick?.call(this)}
      >
        <path
          d="M1 3.5L4 0.5L7 3.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    );
  }
}
