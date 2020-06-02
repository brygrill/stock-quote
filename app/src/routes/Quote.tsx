import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';

import ErrorBoundaryQuote from '../components/ErrorBoundaryQuote';
import QueryQuote from '../components/QueryQuote';

const Quote = () => {
  const { symbol } = useParams();
  return (
    <Box>
      <ErrorBoundaryQuote>
        <React.Suspense fallback={<div>loading...</div>}>
          <div>Quote Here</div>
          <QueryQuote symbol={symbol} />
        </React.Suspense>
      </ErrorBoundaryQuote>
    </Box>
  );
};

export default Quote;
