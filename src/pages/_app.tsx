import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { QueryClientProvider } from 'react-query';

import Layout from 'components/Layout';

import { queryClient } from 'libs/react-query/queryClient';
import { pages, settings } from 'components/Layout/utils/configs';


//font importing
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


//MSW API mock worker service
if (process.env.NODE_ENV === "development") {
  require("../mocks")
}


function App({ Component, pageProps }: AppProps) {

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Layout pages={pages} settings={settings}>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default App
