import React from "react";
import {
  GalleryImage,
  GalleryWrapper,
  SelectedImage,
  SelectedImgWrapper,
} from "./GalleryStyles";

interface GalleryProps {
  selectedImg: string;
  gallery: string[];
  inStock: boolean;
  selectImg: (img: string) => void;
}

export default class Gallery extends React.PureComponent<GalleryProps> {
  render() {
    const { selectedImg, gallery, selectImg, inStock } = this.props;
    return (
      <>
        <GalleryWrapper isOne={gallery.length <= 1} inStock={inStock}>
          {gallery.map((img) => (
            <GalleryImage key={img} src={img} onClick={() => selectImg(img)} />
          ))}
        </GalleryWrapper>
        <SelectedImgWrapper>
          <SelectedImage src={selectedImg || gallery[0]} />
        </SelectedImgWrapper>
      </>
    );
  }
}
