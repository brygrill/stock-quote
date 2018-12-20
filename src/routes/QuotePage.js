import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { SocketContext } from '../components/WithSocketContext';

const QuotePage = props => {
  const context = useContext(SocketContext);
  useEffect(() => {
    context.handleSymbolChange(props.symbol);
  }, []);

  if (context.fetchingQuote.loading) {
    return <Loading page={false} />;
  }
  return <div>{props.symbol}</div>;
};

QuotePage.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default QuotePage;
