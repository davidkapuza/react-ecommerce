import { DecreaseIcon } from "components/icons/DecreaseIcon";
import { IncreaseIcon } from "components/icons/IncreaseIcon";
import React from "react";
import IconButton from "../buttons/IconButton/IconButton";
import { ProductCount } from "./CountChange.styles";

interface CountChangeProps {
  secondary?: boolean;
  increase: () => void;
  decrease: () => void;
  count: number;
}

export default class CountChange extends React.PureComponent<CountChangeProps> {
  render() {
    const { secondary, increase, decrease, count } = this.props;
    return (
      <ProductCount secondary={secondary}>
        <IconButton
          secondary={secondary}
          onClick={() => increase()}
        >
          <IncreaseIcon />
        </IconButton>
        {count}
        <IconButton
          secondary={secondary}
          onClick={() => decrease()}
        >
          <DecreaseIcon />
        </IconButton>
      </ProductCount>
    );
  }
}
