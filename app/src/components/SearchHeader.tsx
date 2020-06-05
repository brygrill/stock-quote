import React from 'react';

import Highlights from '../components/Highlights';
import Search from '../components/QuerySearch';

const MemoHighlights = React.memo(Highlights);

const SearchHeader = () => {
  return (
    <div>
      <Search />
      <MemoHighlights />
    </div>
  );
};

export default SearchHeader;
