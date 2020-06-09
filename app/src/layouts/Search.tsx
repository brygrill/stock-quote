import React, { ReactElement } from 'react';
import SearchHeader from '../components/SearchHeader';

const SearchLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
};

export default SearchLayout;
