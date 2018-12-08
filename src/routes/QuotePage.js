import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading'
import { withSocketContext } from '../components/WithSocketContext';

const QuotePage = props => {
  console.log(props);

  if (props.fetching.loading) {
    return <Loading page={false} />
  }
  return <div>{props.symbol}</div>;
};

QuotePage.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default withSocketContext()(QuotePage);
