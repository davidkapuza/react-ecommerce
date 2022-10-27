import {
  changeCurrency,
  mapCurrenciesStateToProps,
} from "app/currencies/currencies.slice";
import { AppDispatch } from "app/store";
import { Currency } from "models/types";
import React from "react";
import { connect } from "react-redux";
import DropDown from "./DropDown";

export interface DropDownContainerProps extends Currency {
  currencies?: Currency[];
  dispatch: AppDispatch;
  toggleModal?: () => void;
  showModal?: boolean;
}

class DropDownContainer extends React.PureComponent<DropDownContainerProps> {
  constructor(props: DropDownContainerProps) {
    super(props);
    this.currencyChangeHandler = this.currencyChangeHandler.bind(this);
  }
  currencyChangeHandler({ symbol, label }: Currency) {
    this.props.dispatch(changeCurrency({ symbol, label }));
    this.props.toggleModal?.call(this);
  }
  render() {
    return (
      <DropDown
        currencies={this.props.currencies}
        currencyChangeHandler={this.currencyChangeHandler}
        toggleModal={this.props.toggleModal}
        showModal={this.props.showModal}
      />
    );
  }
}

export default connect(mapCurrenciesStateToProps)(DropDownContainer);
