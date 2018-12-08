import React from 'react';
import Loading from '../components/Loading';
import { withSocketContext } from '../components/WithSocketContext';

const HomePage = props => {
  console.log(props);

  if (props.fetching.loading) {
    return <Loading page />;
  }
  return <div>home</div>;
};

export default withSocketContext()(HomePage);
