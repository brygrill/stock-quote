import * as React from 'react';
import { Box } from 'rebass';

import Layout from '../layout/Main';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout maxWidth={1200}>
    <Box
      sx={{
        py: [3, 5],
        px: 2,
      }}
    >
      <Header />
    </Box>
  </Layout>
);

export default IndexPage;
