import React from 'react';
import { Segment } from 'semantic-ui-react';

import SearchInput from './SearchInput';

const Header = props => {
  return (
    <Segment basic textAlign="center" style={{ marginBottom: 0 }}>
      <SearchInput />
    </Segment>
  );
};

export default Header;
