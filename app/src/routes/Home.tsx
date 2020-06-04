import React from 'react';
import { Link } from 'react-router-dom';

import Highlights from '../components/Highlights';
const MemoHighlights = React.memo(Highlights);

const Home = () => {
  return (
    <div>
      <MemoHighlights />
      <Link to="/quote/aapl">Apple</Link>
    </div>
  );
};

export default Home;