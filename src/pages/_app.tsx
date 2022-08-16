import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Layout } from '../components/Layout';
import { pages } from '../components/Layout/utils/configs';

//font importing
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout pages={pages}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
