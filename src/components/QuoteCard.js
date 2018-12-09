import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const QuoteCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header content={props.quote.symbol} />
        <Card.Meta content="Musicians" />
        <Card.Description content="Jake is a drummer living in New York." />
      </Card.Content>
    </Card>
  );
};

QuoteCard.propTypes = {
  quote: PropTypes.object.isRequired,
};

export default QuoteCard;
