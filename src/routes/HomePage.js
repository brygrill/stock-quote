import React from 'react';
import Header from '../components/Header';
import { withSocketContext } from '../components/WithSocketContext';

const HomePage = props => {
  console.log(props);

  if (props.fetching.loading) {
    return <div>loading...</div>;
  }
  return <Header last={props.indiciesLast} quotes={props.indiciesData} />;
};

export default withSocketContext()(HomePage);
