import { Label } from "common/typography/typography";
import { CheckBox } from "components/elements";
import { AttributeSet } from "models/types";
import React from "react";
import {
  AttributeSetContainer,
  StyledAttributes,
} from "./ProductAttributes.style";

export interface AttributesProps {
  attributes: AttributeSet[];
  addToCartHandler?: (e: React.MouseEvent<HTMLElement>) => void;
  addToCart?: (attributes: Readonly<AttributesState>) => void;
  secondary?: boolean;
}
export interface AttributesState {
  [name: string]: any[] | [boolean];
}
class ProductAttributes extends React.PureComponent<
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
          .map((_, idx) =>
            !!this.props.attributes[setIdx].items[idx].selected
          )
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
      <>
        {this.props.attributes.map(({ items, name }) => (
          <AttributeSetContainer key={name}>
            <Label lg={this.props.secondary}>{name}:</Label>
            <StyledAttributes>
              {items.map(({ id, value }, attrIdx) => (
                <CheckBox
                  key={id}
                  color={name.toLowerCase() === "color" ? value : "none"}
                  secondary={this.props.secondary}
                  checked={this.state[name][attrIdx]}
                  onChange={() => this.handleCheckboxChange(name, attrIdx)}
                >
                  {value}
                </CheckBox>
              ))}
            </StyledAttributes>
          </AttributeSetContainer>
        ))}
      </>
    );
  }
}

export default ProductAttributes;
