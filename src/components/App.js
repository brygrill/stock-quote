import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import { SocketProvider } from './WithSocketContext';
import Layout from '../layout';
import Router from '../routes';

const App = () => {
  return (
    <ErrorBoundary>
      <SocketProvider>
        <Layout>
          <Router />
        </Layout>
      </SocketProvider>
    </ErrorBoundary>
  );
};

export default App;
