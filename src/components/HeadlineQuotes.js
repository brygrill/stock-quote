import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Segment } from 'semantic-ui-react';

import QuoteCard from './QuoteCard';

const HeadlineQuotes = ({ quotes }) => {
  return (
    <Segment>
      {_.map(quotes, (q, i) => {
        return <QuoteCard key={i} quote={q.quote} />;
      })}
    </Segment>
  );
};

HeadlineQuotes.propTypes = {
  quotes: PropTypes.object.isRequired,
};

export default HeadlineQuotes;
