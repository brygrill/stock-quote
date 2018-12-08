import React from 'react';
import PropTypes from 'prop-types';
import { withSocketContext } from '../components/WithSocketContext';

const QuotePage = props => {
  console.log(props);
  return <div>{props.symbol}</div>;
};

QuotePage.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default withSocketContext()(QuotePage);
