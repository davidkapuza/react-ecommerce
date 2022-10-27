import React from "react";
import ImagesSlider from "./ImagesSlider";

interface ImageSliderContainerProps {
  gallery: string[];
  secondary: boolean;
}
interface ImageSliderContainerState {
  imgIdx: number;
}

export default class ImagesSliderContainer extends React.PureComponent<
  ImageSliderContainerProps,
  ImageSliderContainerState
> {
  constructor(props: ImageSliderContainerProps) {
    super(props);
    this.state = { imgIdx: 0 };
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }
  next = () => {
    this.setState({ imgIdx: this.state.imgIdx + 1 });
    if (this.state.imgIdx === this.props.gallery.length - 1)
      this.setState({ imgIdx: 0 });
  };
  prev = () => {
    this.setState({ imgIdx: this.state.imgIdx - 1 });
    if (this.state.imgIdx === 0)
      this.setState({ imgIdx: this.props.gallery.length - 1 });
  };
  render() {
    return (
      <ImagesSlider
        gallery={this.props.gallery}
        imgIdx={this.state.imgIdx}
        next={this.next}
        prev={this.prev}
        secondary={this.props.secondary}
      />
    );
  }
}
