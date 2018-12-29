import React from 'react';
import { Segment } from 'semantic-ui-react';

import SearchInput from './SearchInput';

const Header = props => {
  return (
    <Segment basic textAlign="center">
      <SearchInput />
    </Segment>
  );
};

export default Header;
