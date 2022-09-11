import styled from "styled-components";

export const ProductGridContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 292px;
  column-gap: 60px;
  margin-top: 162px;
  @media (max-width: ${({ theme }) => theme.media.Medium}) {
    grid-template-columns: 1fr;
  } ;
`;
export const ProductGalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.media.Large}) {
    flex-direction: column-reverse;
    justify-content: start;
  } ;
`;
