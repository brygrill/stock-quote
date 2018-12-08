import React from 'react';
import SearchInput from './SearchInput';
import { withSocketContext } from '../components/WithSocketContext';

const Header = props => {
  return (
    <div>
      <SearchInput />
      <div>market data</div>
    </div>
  );
};

export default withSocketContext()(Header);
