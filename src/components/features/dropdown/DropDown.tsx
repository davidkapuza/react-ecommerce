import { mapCurrenciesStateToProps } from "app/currencies/currencies.slice";
import { PriceLabel } from "common/typography/typography";
import { Currency } from "models/types";
import React from "react";
import { connect } from "react-redux";
import {
  DropdownItem,
  DropdownList,
  NavbarExpandIcon,
  Selected,
} from "./DropDown.styles";

export interface DropDownProps {
  currencyChangeHandler: (arg0: Currency) => void;
  currencies: Currency[] | undefined;
  showModal?: boolean;
  toggleModal?: () => void;
}

class DropDown extends React.PureComponent<DropDownProps & Currency> {
  render() {
    const {
      currencies,
      currencyChangeHandler,
      showModal,
      symbol,
      toggleModal,
    } = this.props;
    return (
      <>
        <Selected onClick={() => toggleModal?.call(this)}>
          <PriceLabel>{symbol}</PriceLabel>
          <NavbarExpandIcon
            rotate={showModal ? "rotate(0deg)" : "rotate(180deg)"}
          />
        </Selected>
        {showModal && (
          <DropdownList>
            {currencies?.map(({ symbol, label }) => {
              return (
                <DropdownItem
                  onClick={() => currencyChangeHandler({ symbol, label })}
                  key={label}
                >
                  <PriceLabel>{`${symbol} ${label}`}</PriceLabel>
                </DropdownItem>
              );
            })}
          </DropdownList>
        )}
      </>
    );
  }
}

export default connect(mapCurrenciesStateToProps)(DropDown);
