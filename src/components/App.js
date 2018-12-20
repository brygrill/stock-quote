import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import WithInstantSearch from './WithInstantSearch';
import { DataProvider } from './WithDataContext';
import Layout from '../layout';
import Router from '../routes';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <WithInstantSearch>
          <DataProvider>
            <Layout>
              <Router />
            </Layout>
          </DataProvider>
        </WithInstantSearch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
