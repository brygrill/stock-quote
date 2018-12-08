import React from 'react';
import { withSocketContext } from '../components/WithSocketContext';

const Header = props => {
  return (
    <div>
      <div>search</div>
      <div>market data</div>
    </div>
  );
};

export default withSocketContext()(Header);
