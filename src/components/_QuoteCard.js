import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const QuoteCard = ({ color, symbol, changePercent, latestPrice, push }) => {
  return (
    <Card
      color={color}
      link
      onClick={(e, p) => {
        push(symbol);
      }}
    >
      <Card.Content>
        <Card.Header content={symbol} />
        <Card.Meta content={changePercent} />
        <Card.Description content={latestPrice} />
      </Card.Content>
    </Card>
  );
};

QuoteCard.propTypes = {
  color: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  latestPrice: PropTypes.string.isRequired,
  changePercent: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

export default QuoteCard;
