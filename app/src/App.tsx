import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './layouts';
import Router from './routes';

const App = () => (
  <ErrorBoundary render={() => <div>The entire app broke!</div>}>
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={<div>Loading app routes...</div>}>
          <Router />
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
