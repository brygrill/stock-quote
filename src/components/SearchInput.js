import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connectAutoComplete } from 'react-instantsearch-dom';
import { withRouter } from 'react-router';
import { Search } from 'semantic-ui-react';

const formatHits = hits => {
  return _.chain(hits)
    .map(h => {
      return { title: h.symbol, description: h.name };
    })
    .slice(0, 10)
    .value();
};

const SearchInput = props => {
  const [val, setVal] = useState('');

  const onChange = (e, { value }) => {
    setVal(value);
    props.refine(value);
  };

  const onSelect = (e, { result }) => {
    setVal('');
    props.history.push({
      pathname: `${result.title.toLowerCase()}`,
    });
  };

  return (
    <Search
      fluid
      input={{ style: { width: '90%' } }}
      size="small"
      placeholder="Enter Company or Symbol"
      value={val}
      onSearchChange={onChange}
      onResultSelect={onSelect}
      results={formatHits(props.hits)}
    />
  );
};

SearchInput.propTypes = {
  refine: PropTypes.func.isRequired,
  hits: PropTypes.array.isRequired,
};

export default connectAutoComplete(withRouter(SearchInput));
