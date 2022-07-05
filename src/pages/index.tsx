import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import GlobalStyle from '../styles/global';
import { App } from '../containers';

config.autoAddCss = false;

export default () => {
  return (
    <>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <GlobalStyle />
      <App />
    </>
  );
};
