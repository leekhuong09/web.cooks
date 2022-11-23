// import App from 'next/app'
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { Provider, rootStore } from 'stores';

import '../../public/sass/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={rootStore}>
      <Head>
        <link
          key="preconnect"
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          key="font"
          data-href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"></style>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

MyApp.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };

export default MyApp;
