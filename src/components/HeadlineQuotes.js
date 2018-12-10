import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Card } from 'semantic-ui-react';

import QuoteCard from './QuoteCard';

const HeadlineQuotes = ({ quotes, socket, push }) => {
  return (
    <Card.Group centered stackable itemsPerRow={5}>
      {_.map(quotes, (q, i) => {
        const { quote } = q;
        return (
          <QuoteCard
            key={i}
            symbol={quote.symbol}
            name={quote.companyName}
            close={quote.close}
            last={socket[quote.symbol] || quote.latestPrice}
            push={push}
          />
        );
      })}
    </Card.Group>
  );
};

HeadlineQuotes.propTypes = {
  quotes: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

export default HeadlineQuotes;
