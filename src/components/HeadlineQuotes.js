import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Card } from 'semantic-ui-react';

import QuoteCard from './QuoteCard';

import { quoteFormatting } from '../utils/format';

const setDisplay = (current, quote, i) => {
  // if current quote in indicies, use that data
  // so display is in sync
  if (!_.isEmpty(current)) {
    if (current.quote.symbol === i) {
      return quoteFormatting(current.quote);
    } else {
      return quoteFormatting(quote);
    }
  }
  // if on homepage, dont worry about syncing quote
  return quoteFormatting(quote);
};

const HeadlineQuotes = ({ incidies, currentQuote, push }) => {
  return (
    <Card.Group centered stackable itemsPerRow={5}>
      {_.map(incidies, (q, i) => {
        const display = setDisplay(currentQuote, q.quote, i)
        return (
          <QuoteCard
            key={i}
            symbol={display.symbol}
            color={display.status}
            latestPrice={display.latestPrice}
            changePercent={display.changePercent}
            push={push}
          />
        );
      })}
    </Card.Group>
  );
};

HeadlineQuotes.propTypes = {
  incidies: PropTypes.object.isRequired,
  quote: PropTypes.object,
  push: PropTypes.func.isRequired,
};

HeadlineQuotes.defaultProps = {
  currentQuote: {
    quote: {
      symbol: null,
    },
  },
};

export default HeadlineQuotes;
