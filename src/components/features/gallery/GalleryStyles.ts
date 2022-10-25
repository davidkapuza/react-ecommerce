import styled from "styled-components";

export const GalleryContainer = styled.div<{inStock: boolean, isOne: boolean}>`
  display: flex;
  flex-direction: column;
  width: 91px;
  max-height: 50%;
  flex-shrink: 0;
  overflow-y: ${({inStock, isOne}) => !inStock || isOne ? "hidden" : "scroll"};
  overflow-x: clip;

  @media (max-width: ${({ theme }) => theme.media.Large}) {
    flex-direction: row;
    height: 91px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: clip;
  } ;
`;

export const GalleryImage = styled.img`
  object-fit: cover;
  width: 80px;
  height: 80px;
  margin: 0 40px 40px 0;
  cursor: pointer;
`

export const SelectedImgWrapper = styled.div`
  align-self: start;
`;
export const SelectedImage = styled.img`
  max-height: 610px;
  object-fit: cover;
  padding: 0 40px 40px 40px;
`;


export const SliderWrapper = styled.div`



`