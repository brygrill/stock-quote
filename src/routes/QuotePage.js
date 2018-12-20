import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import QuoteData from '../components/QuoteData';
import { DataContext } from '../components/WithDataContext';

const QuotePage = props => {
  const {
    symbol,
    fetchingQuote,
    handleSymbolChange,
    quoteData,
    // fetchQuoteInterval,
  } = useContext(DataContext);

  useEffect(
    () => {
      handleSymbolChange(props.symbol);
      // if (symbol) fetchQuoteInterval(props.symbol, 5000);
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
