import React from "react";
import {
  GalleryContainer,
  GalleryImage,
  SelectedImage,
  SelectedImgWrapper,
} from "./GalleryStyles";

interface GalleryProps {
  gallery: [string];
  defaultImg: string;
}

interface GalleryState {
  selectedImg: string;
}

export default class Gallery extends React.PureComponent<
  GalleryProps,
  GalleryState
> {
  constructor(props: GalleryProps) {
    super(props);
    this.state = { selectedImg: "" };
  }

  selectImg(img: string) {
    this.setState({ selectedImg: img });
  }
  render() {
    return (
      <>
        <GalleryContainer>
          {this.props.gallery.map((img) => (
            <GalleryImage
              key={img}
              src={img}
              onClick={() => this.selectImg(img)}
            />
          ))}
        </GalleryContainer>
        <SelectedImgWrapper>
          <SelectedImage src={this.state.selectedImg || this.props.gallery[0]} />
        </SelectedImgWrapper>
      </>
    );
  }
}
