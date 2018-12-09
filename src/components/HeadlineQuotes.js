import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import QuoteCard from './QuoteCard';

const HeadlineQuotes = ({ quotes }) => {
  return (
    <div>
      {_.map(quotes, (q, i) => {
        return <QuoteCard key={i} quote={q.quote} />;
      })}
    </div>
  );
};

HeadlineQuotes.propTypes = {
  quotes: PropTypes.object.isRequired,
};

export default HeadlineQuotes;
