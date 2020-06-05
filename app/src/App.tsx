import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

import ErrorBoundary from './components/ErrorBoundary';
import Layout from './layouts';
import Router from './routes';

const App = () => (
  <>
    <ReactQueryDevtools initialIsOpen={false} />
    <ErrorBoundary render={() => <div>The entire app broke!</div>}>
      <BrowserRouter>
        <React.Suspense fallback={<div />}>
          <Layout>
            <React.Suspense fallback={<div>Loading app routes...</div>}>
              <Router />
            </React.Suspense>
          </Layout>
        </React.Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </>
);

export default App;
