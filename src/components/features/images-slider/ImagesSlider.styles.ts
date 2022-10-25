import styled, { css } from "styled-components";

export const SliderContainer = styled.div<{ secondary?: boolean }>`
  flex: 1;
  position: relative;
  ${({ secondary }) => secondary && css`
    max-width: 200px;
  `}
`
export const ImageContainer = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

export const ButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  column-gap: 5px;
  bottom: 1em;
  right: 1em;
  & > :first-child {
    transform: scale(-1);
  }
`