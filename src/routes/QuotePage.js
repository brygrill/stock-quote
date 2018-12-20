import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import QuoteData from '../components/QuoteData';
import { SocketContext } from '../components/WithSocketContext';

const QuotePage = props => {
  const { symbol, fetchingQuote, handleSymbolChange, quoteData } = useContext(
    SocketContext,
  );

  useEffect(
    () => {
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
