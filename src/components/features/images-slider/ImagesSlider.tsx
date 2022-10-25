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
}
interface ImageSliderState {
  imgIdx: number;
}

export default class ImagesSlider extends React.PureComponent<ImageSliderProps, ImageSliderState> {
  constructor(props: ImageSliderProps) {
    super(props);
    this.state = { imgIdx: 0 };
  }
  next = () => {
    this.setState({ imgIdx: this.state.imgIdx + 1 })
    if (this.state.imgIdx === this.props.gallery.length - 1) this.setState({imgIdx: 0})
  }
  prev = () => {
    this.setState({ imgIdx: this.state.imgIdx - 1 })
    if (this.state.imgIdx === 0) this.setState({imgIdx: this.props.gallery.length - 1})
  }
  render() {
    console.log(this.props.secondary)
    return (
      <SliderContainer secondary={this.props.secondary}>
        <ImageContainer src={this.props.gallery[this.state.imgIdx]}></ImageContainer>
        <ButtonsWrapper>
          <IconButton filled onClick={() => this.next()}>
            <ArrowRightIcon />
          </IconButton>
          <IconButton filled onClick={() => this.prev()}>
            <ArrowRightIcon />
          </IconButton>
        </ButtonsWrapper>
      </SliderContainer>
    );
  }
}
