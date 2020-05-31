import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './layouts';
import Router from './routes';

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
