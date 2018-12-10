import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { withSocketContext } from '../components/WithSocketContext';

const QuotePage = props => {

  useEffect(() => {
    props.handleSymbolChange(props.symbol);
  }, []);

  if (props.fetchingQuote.loading) {
    return <Loading page={false} />;
  }
  return <div>{props.symbol}</div>;
};

QuotePage.propTypes = {
  symbol: PropTypes.string.isRequired,
  handleSymbolChange: PropTypes.func.isRequired,
};

export default withSocketContext()(QuotePage);
