import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import QuoteData from '../components/QuoteData';
import { Segment } from 'semantic-ui-react';
import { DataContext } from '../components/WithDataContext';

const QuotePage = props => {
  const {
    symbol,
    fetchingQuote,
    fetchingIncidies,
    handleSymbolChange,
    quoteData,
  } = useContext(DataContext);

  // fetch new data every symbol changes
  useEffect(
    () => {
      if (props.symbol && props.symbol !== symbol)
        handleSymbolChange(props.symbol);
    },
    [props.symbol, symbol],
  );

  return (
    <Segment
      loading={fetchingQuote.loading && !fetchingIncidies.loading}
      style={{ minHeight: '300px' }}
    >
      {!fetchingQuote.loading && <QuoteData symbol={symbol} data={quoteData} />}
    </Segment>
  );
};

QuotePage.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default QuotePage;
