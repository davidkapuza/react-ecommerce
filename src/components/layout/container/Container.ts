import styled from "styled-components";

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  overflow: auto;
  padding: 0 100px;
  @media (max-width: ${({ theme }) => theme.media.Medium}) {
    padding: 0 40px;
  }
`