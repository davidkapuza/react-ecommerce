import { Label } from 'common/typography/typography';
import { CheckBox } from 'components/elements';
import { AttributeSet } from 'models/types';
import React from 'react'
import { StyledAttributes } from './ProductAttributes.style';
import { AttributesState } from './ProductAttributesContainer';

interface ProductAttributesProps {
  state: AttributesState;
  attributes: AttributeSet[];
  secondary?: boolean;
  isProductPage?: boolean;
  handleCheckboxChange: (name: string, attrIdx: number) => void;
}

export default class ProductAttributes extends React.PureComponent<ProductAttributesProps> {
  render() {
    const { state, attributes, isProductPage, secondary, handleCheckboxChange } = this.props;
    return (
      <>
        {attributes.map(({ items, name }) => (
          <div key={name}>
            <Label lg={secondary}>{name}:</Label>
            <StyledAttributes>
              {items.map(({ id, value }, attrIdx) => (
                <CheckBox
                  key={id}
                  color={name.toLowerCase() === "color" ? value : "none"}
                  secondary={secondary ?? false}
                  checked={state[name][attrIdx]}
                  isProductPage={isProductPage ?? false}
                  onChange={() =>
                    secondary &&
                    handleCheckboxChange(name, attrIdx)
                  }
                >
                  {value}
                </CheckBox>
              ))}
            </StyledAttributes>
          </div>
        ))}
      </>
    );
  }
}
