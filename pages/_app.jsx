/* eslint-disable react/jsx-props-no-spreading */
import GlobalStyle from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
