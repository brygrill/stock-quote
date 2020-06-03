import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';

import ErrorBoundary from '../components/ErrorBoundary';
import QueryQuote from '../components/QueryQuote';

const Quote = () => {
  const { symbol } = useParams();
  const [tryAgain, setTryAgain] = React.useState(false);

  React.useEffect(() => {
    if (tryAgain) setTryAgain(false)
  }, [tryAgain]);

  return (
    <Box>
      <ErrorBoundary
        reset={tryAgain}
        render={() => (
          <div>
            Error fetching quote!{' '}
            <button onClick={() => setTryAgain(true)}>Try again</button>
          </div>
        )}
      >
        <React.Suspense fallback={<div>Loading symbol...</div>}>
          <div>Quote Here</div>
          <QueryQuote symbol={symbol} />
        </React.Suspense>
      </ErrorBoundary>
    </Box>
  );
};

export default Quote;
