import React from "react";
import { Icon } from "./Icon";
import { IconProps } from "./Icon";


export class MenuIcon extends React.PureComponent<IconProps> {
  render() {
    return (
      <Icon
        viewBox="0 0 50 50"
        className={this.props.className}
        onClick={() => this.props.onClick?.call(this)}
      >
        <path
          fill="currentColor"
          d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"
        />
      </Icon>
    );
  }
}
