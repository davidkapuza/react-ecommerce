import IconButton from "components/elements/buttons/IconButton/IconButton";
import { ArrowRightIcon } from "components/icons/ArrowRightIcon";
import React from "react";
import {
  ButtonsWrapper,
  ImageContainer,
  SliderContainer,
} from "./ImagesSlider.styles";

interface ImageSliderProps {
  gallery: string[];
  secondary: boolean;
  imgIdx: number;
  next: () => void;
  prev: () => void;
}

export default class ImagesSlider extends React.PureComponent<ImageSliderProps> {
  render() {
    const { gallery, next, prev, imgIdx, secondary } = this.props;
    return (
      <SliderContainer secondary={secondary}>
        <ImageContainer src={gallery[imgIdx]}></ImageContainer>
        {secondary && (
          <ButtonsWrapper>
            <IconButton filled onClick={() => next()}>
              <ArrowRightIcon />
            </IconButton>
            <IconButton filled onClick={() => prev()}>
              <ArrowRightIcon />
            </IconButton>
          </ButtonsWrapper>
        )}
      </SliderContainer>
    );
  }
}
