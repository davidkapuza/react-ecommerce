import { Currency } from "models/types";
import React from "react";
import { connect } from "react-redux";
import {
  changeCurrency,
  mapCurrenciesStateToProps,
} from "app/currencies/currencies.slice";
import { AppDispatch } from "app/store";
import {
  DropdownItem,
  DropdownList,
  NavbarExpandIcon,
  Selected,
} from "./DropDown.styles";
import { PriceLabel } from "common/typography/typography";

export interface DropDownProps {
  data: [Currency] | undefined;
  dispatch: AppDispatch;
  toggleModal?: () => void;
  showModal?: boolean;
}

class DropDown extends React.PureComponent<DropDownProps & Currency> {
  currencyChangeHandler({ symbol, label }: Currency) {
    this.props.dispatch(changeCurrency({ symbol, label }));
    this.props.toggleModal?.call(this);
  }

  render() {
    return (
      <>
        <Selected onClick={() => this.props.toggleModal?.call(this)}>
          <PriceLabel>{this.props.symbol}</PriceLabel>
          <NavbarExpandIcon
            rotate={this.props.showModal ? "rotate(0deg)" : "rotate(180deg)"}
          />
        </Selected>
        {this.props.showModal && (
          <DropdownList>
            {this.props.data?.map(({ symbol, label }) => {
              return (
                <DropdownItem
                  onClick={() => this.currencyChangeHandler({ symbol, label })}
                  key={label}
                ><PriceLabel>{`${symbol} ${label}`}</PriceLabel></DropdownItem>
              );
            })}
          </DropdownList>
        )}
      </>
    );
  }
}

export default connect(mapCurrenciesStateToProps)(DropDown);
