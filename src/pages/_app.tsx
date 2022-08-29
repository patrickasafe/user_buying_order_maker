import 'styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from 'components/Layout';
import { QueryClientProvider } from 'react-query';

import { queryClient } from 'libs/react-query/queryClient';
import { pages } from 'components/Layout/utils/configs';

//font importing
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


//MSW API mock worker service
if (process.env.NODE_ENV === "development") {
  require("../mocks")
}


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout pages={pages}>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp
