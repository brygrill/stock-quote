import React from 'react';
import Header from '../components/Header';
import { withSocketContext } from '../components/WithSocketContext';

const HomePage = props => {
  console.log(props);

  if (props.fetching.loading) {
    return <div>loading...</div>;
  }
  return <div>home</div>;
};

export default withSocketContext()(HomePage);

