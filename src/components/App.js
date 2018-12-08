import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import WithInstantSearch from './WithInstantSearch';
import { SocketProvider } from './WithSocketContext';
import Layout from '../layout';
import Router from '../routes';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <WithInstantSearch>
          <SocketProvider>
            <Layout>
              <Router />
            </Layout>
          </SocketProvider>
        </WithInstantSearch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
