import GlobalStyles from "common/globalStyles";
import { Container, Header } from "components/layout";
import React from "react";
import Router from "router/Router";

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Router />
        </Container>
      </>
    );
  }
}

export default App;
