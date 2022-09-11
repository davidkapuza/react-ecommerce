import styled from "styled-components";

export const ModalBackground = styled.div<{showModal: boolean}>`
  top: 80px;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100%;
  background: gray;
  opacity: 0.5;
  display: ${({showModal}) => showModal ? "block" : "none"};


`