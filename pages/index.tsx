import React from 'react';
import Link from 'next/link';

import Wrapper from '../components/Wrapper';

const home = () => {
  return (
    <Wrapper title="Home">
      <Link href="/aapl">
        <a>AAPL</a>
      </Link>
    </Wrapper>
  );
};

export default home;
