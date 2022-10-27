import { AttributeSet } from "models/types";
import React from "react";
import ProductAttributes from "./ProductAttributes";

export interface AttributesProps {
  attributes: AttributeSet[];
  addToCartHandler?: (e: React.MouseEvent<HTMLElement>) => void;
  addToCart?: (attributes: Readonly<AttributesState>) => void;
  secondary?: boolean;
  isProductPage?: boolean;
}
export interface AttributesState {
  [name: string]: any[] | [boolean];
}
class ProductAttributesContainer extends React.PureComponent<
  AttributesProps,
  AttributesState
> {
  constructor(props: AttributesProps) {
    super(props);
    this.state = this.props.attributes.reduce(
      (accum, set, setIdx) => ({
        ...accum,
        [set.name]: new Array(set.items.length)
          .fill(false)
          .map((_, idx) => !!this.props.attributes[setIdx].items[idx].selected)
          .map((value, idx, self) =>
            self.every((i) => !i) ? (!idx ? true : value) : value
          ),
      }),
      {}
    );
  }
  addToCartHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    this.props.addToCart?.call(this, this.state);
  }
  handleCheckboxChange = (name: string, attrIdx: number) => {
    this.setState({
      ...this.state,
      [name]: this.state[name].map((item, idx) =>
        idx === attrIdx && !item
          ? !item
          : item && idx !== attrIdx
          ? !item
          : item
      ),
    });
  };
  render() {
    return (
      <ProductAttributes
        attributes={this.props.attributes}
        state={this.state}
        secondary={this.props.secondary}
        isProductPage={this.props.isProductPage}
        handleCheckboxChange={this.handleCheckboxChange}
      />
    );
  }
}

export default ProductAttributesContainer;
