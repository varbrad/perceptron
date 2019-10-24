import NextApp from 'next/app';

import '../sass/app.scss';

class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default App;
