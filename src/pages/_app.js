// React
import React from 'react';
import App, { Container } from 'next/app';

// Redux
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

// State
import { initStore, clientState } from 'state/store';

// Components
import Nav from 'components/nav/Nav';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={ store }>
          <Nav />
          <Component { ...pageProps } />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore, state => clientState(state))(MyApp);
