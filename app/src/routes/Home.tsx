import React from 'react';
import { Link } from 'react-router-dom';

import Highlights from '../components/Highlights';
import Search from '../components/QuerySearch';

const MemoHighlights = React.memo(Highlights);

const Home = () => {
  return (
    <div>
      <Search />
      <MemoHighlights />
      <Link to="/quote/aapl">Apple</Link>
    </div>
  );
};

export default Home;