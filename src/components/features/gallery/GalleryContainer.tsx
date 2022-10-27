import React from "react";
import Gallery from "./Gallery";

interface GalleryContainerProps {
  gallery: string[];
  inStock: boolean;
}

interface GalleryContainerState {
  selectedImg: string;
}

export default class GalleryContainer extends React.PureComponent<
  GalleryContainerProps,
  GalleryContainerState
> {
  constructor(props: GalleryContainerProps) {
    super(props);
    this.state = { selectedImg: "" };
    this.selectImg = this.selectImg.bind(this)
  }

  selectImg(img: string) {
    console.log("selectimg works");
    this.setState({ selectedImg: img });
  }
  render() {
    return (
      <Gallery
        gallery={this.props.gallery}
        selectedImg={this.state.selectedImg}
        selectImg={this.selectImg}
        inStock={this.props.inStock}
      />
    );
  }
}
