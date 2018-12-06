import React from 'react';
import PropTypes from 'prop-types';

const QuotePage = ({symbol}) => {
  return (
    <div>
      {symbol}
    </div>
  );
};

QuotePage.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default QuotePage;