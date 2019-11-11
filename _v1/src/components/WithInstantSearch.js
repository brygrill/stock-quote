import React from 'react';
import PropTypes from 'prop-types';
import { InstantSearch } from 'react-instantsearch-dom';

const WithInstantSearch = ({ children }) => {
  return (
    <InstantSearch
      appId={process.env.REACT_APP_ALGOLIA_ID}
      apiKey={process.env.REACT_APP_ALGOLIA_API_KEY}
      indexName={process.env.REACT_APP_ALGOLIA_INDEX}
    >
      {children}
    </InstantSearch>
  );
};

WithInstantSearch.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WithInstantSearch;
