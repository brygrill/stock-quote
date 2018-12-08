import React from 'react';
import PropTypes from 'prop-types';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchInput = props => {
  console.log(props)
  return (
    <div>
      search
    </div>
  );
};

SearchInput.propTypes = {
  
};

export default connectSearchBox(SearchInput);
