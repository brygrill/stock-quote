import React from 'react';

import Highlights from './QueryHighlights';
import Search from '../components/QuerySearch';

const MemoHighlights = React.memo(Highlights);

const SearchHeader = () => {
  return (
    <>
      <Search />
      <MemoHighlights />
    </>
  );
};

export default SearchHeader;
