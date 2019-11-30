import * as React from 'react';
import { Box, Flex, Heading } from 'rebass';

import Layout from '../layout/Main';

const NotFoundPage = () => (
  <Layout maxWidth={962}>
    <Box
      sx={{
        py: [3, 5],
        px: [1, 3, 5],
      }}
    >
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Heading sx={{ fontSize: 150 }}>404</Heading>
      </Flex>
    </Box>
  </Layout>
);

export default NotFoundPage;
