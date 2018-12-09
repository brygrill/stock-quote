import React from 'react';
import HeadlineNews from '../components/HeadlineNews';
import { withSocketContext } from '../components/WithSocketContext';

const HomePage = props => {
  return <HeadlineNews />;
};

export default withSocketContext()(HomePage);
