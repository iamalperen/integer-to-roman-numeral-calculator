import Head from 'next/head';
import GlobalStyle from '../styles/global';
import { App } from '../containers';

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
