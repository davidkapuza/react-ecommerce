import {
  Header3, PriceLabel
} from "common/typography/typography";
import { StyledButton } from "components/elements/buttons/RegularButton/RegularButton.styles";
import styled from "styled-components";

export const ProductCustomisationContainer = styled.form`
  display: flex;
  flex-direction: column;
  & ${PriceLabel} {
    padding: 17px 0 15px;
  }
`;

export const Subheader = styled(Header3)`
  margin: 16px 0 43px;
`;

export const ProductBtnContainer = styled(StyledButton)`
  margin: 20px 0 40px;
`;
