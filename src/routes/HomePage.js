import React from 'react';
import { withSocketContext } from '../components/WithSocketContext';

const HomePage = props => {
  console.log(props);
  return <div>search</div>;
};

export default withSocketContext()(HomePage);
