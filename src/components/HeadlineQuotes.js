import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Card } from 'semantic-ui-react';

import QuoteCard from './QuoteCard';

const HeadlineQuotes = ({quotes, media}) => {
  return (
    <Card.Group centered itemsPerRow={media ? null : 5}>
      {_.map(quotes, (q, i) => {
        return <QuoteCard key={i} quote={q.quote} />;
      })}
    </Card.Group>
  );
};

HeadlineQuotes.propTypes = {
  quotes: PropTypes.object.isRequired,
  media: PropTypes.bool.isRequired,
};

export default HeadlineQuotes;
