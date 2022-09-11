import { NavigationContainer } from 'components/features'
import React from 'react'
import { Container } from '..'
import { HeaderContainer } from './Header.styles'

export default class Header extends React.PureComponent {
  render() {
    return (
      <HeaderContainer>
        <Container>
          <NavigationContainer/>
        </Container>
      </HeaderContainer>
    )
  }
}
