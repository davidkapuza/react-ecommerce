import React from 'react'
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './CheckBox.styles';

export interface CheckBoxProps {
  checked?: boolean;
  children: string | false;
  onChange?: () => void;
  color: string;
  secondary?: boolean;
}

export default class CheckBox extends React.PureComponent<CheckBoxProps> {

  render() {
    const { checked, children, onChange, color, ...props } = this.props;
    return (
      <CheckboxContainer color={color} {...props}>
        <HiddenCheckbox checked={checked} onChange={() => onChange?.call(this)} />
        <StyledCheckbox checked={checked} color={color} {...props}>
          {color === "none" && children}
        </StyledCheckbox>
      </CheckboxContainer>
    )
  }
}
