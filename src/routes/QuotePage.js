import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import QuoteData from '../components/QuoteData';
import { DataContext } from '../components/WithDataContext';

const QuotePage = props => {
  const { symbol, fetchingQuote, handleSymbolChange, quoteData } = useContext(
    DataContext,
  );

  // fetch new data every symbol changes
  useEffect(
    () => {
      if (props.symbol && props.symbol !== symbol)
        handleSymbolChange(props.symbol);
    },
    [props.symbol, symbol],
  );

  return (
    <QuoteData
      loading={fetchingQuote.loading}
      symbol={symbol}
      data={quoteData}
    />
  );
};

QuotePage.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default QuotePage;
