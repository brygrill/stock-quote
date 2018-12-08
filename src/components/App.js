import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import WithInstantSearch from './WithInstantSearch';
import { SocketProvider } from './WithSocketContext';
import Layout from '../layout';
import Router from '../routes';

const App = () => {
  return (
    <ErrorBoundary>
      <WithInstantSearch>
        <SocketProvider>
          <Layout>
            <Router />
          </Layout>
        </SocketProvider>
      </WithInstantSearch>
    </ErrorBoundary>
  );
};

export default App;
