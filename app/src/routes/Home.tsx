import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/quote/aapl">Apple</Link>
    </div>
  );
};

export default Home;