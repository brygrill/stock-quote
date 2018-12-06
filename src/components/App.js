import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Layout from '../layout';
import Router from '../routes';

const App = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <Router />
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
