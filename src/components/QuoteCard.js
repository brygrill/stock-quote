import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { price, calcPercCh } from '../utils/format';

const QuoteCard = props => {
  const change = calcPercCh(props.close, props.last);
  return (
    <Card
      color={change.color}
      link
      onClick={(e, p) => {
        props.push(props.symbol);
      }}
    >
      <Card.Content>
        <Card.Header content={props.symbol} />
        <Card.Meta content={change.perc} />
        <Card.Description content={price(props.last)} />
      </Card.Content>
    </Card>
  );
};

QuoteCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  last: PropTypes.number.isRequired,
  close: PropTypes.number.isRequired,
  push: PropTypes.func.isRequired,
};

export default QuoteCard;
