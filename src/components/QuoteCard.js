import React from 'react';
import PropTypes from 'prop-types';

const QuoteCard = props => {
  return <div>{props.quote.symbol}</div>;
};

QuoteCard.propTypes = {
  quote: PropTypes.object.isRequired,
};

export default QuoteCard;
