import React from 'react';
import { withSocketContext } from '../components/WithSocketContext';

const HomePage = props => {
  return <div>top movers and news</div>;
};

export default withSocketContext()(HomePage);
